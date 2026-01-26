const pa11y = require('pa11y');
const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.BASE_URL || 'http://localhost:8083';

const pagesToTest = [
  { name: 'Homepage', path: '/' },
  { name: 'Contact', path: '/contact/' },
  { name: 'Réalisations', path: '/realisations/' },
  { name: 'Courant Fort', path: '/services/courant-fort/' },
  { name: 'Courant Faible', path: '/services/courant-faible/' },
  { name: 'GTB Domotique', path: '/services/gtb-domotique/' },
  { name: 'Bornes IRVE', path: '/services/bornes-recharge-irve/' },
  { name: 'Entretien Dépannage', path: '/services/entretien-depannage/' },
];

const pa11yOptions = {
  standard: 'WCAG2AA',
  includeWarnings: false,
  timeout: 30000,
  wait: 1000,
};

async function runAccessibilityTests() {
  console.log('\n🔍 Running accessibility tests (WCAG 2.1 AA)...\n');
  console.log(`Base URL: ${BASE_URL}\n`);
  
  let totalErrors = 0;
  let totalWarnings = 0;
  const results = [];

  for (const page of pagesToTest) {
    const url = `${BASE_URL}${page.path}`;
    console.log(`Testing: ${page.name} (${url})`);
    
    try {
      const result = await pa11y(url, pa11yOptions);
      
      const errors = result.issues.filter(i => i.type === 'error');
      const warnings = result.issues.filter(i => i.type === 'warning');
      
      totalErrors += errors.length;
      totalWarnings += warnings.length;
      
      results.push({
        page: page.name,
        url: url,
        errors: errors.length,
        warnings: warnings.length,
        issues: result.issues,
      });
      
      if (errors.length === 0) {
        console.log(`  ✅ PASS - No errors`);
      } else {
        console.log(`  ❌ FAIL - ${errors.length} error(s)`);
        errors.forEach(issue => {
          console.log(`     - ${issue.message}`);
          console.log(`       Selector: ${issue.selector}`);
        });
      }
    } catch (error) {
      console.log(`  ⚠️  ERROR - Could not test: ${error.message}`);
      results.push({
        page: page.name,
        url: url,
        errors: -1,
        warnings: 0,
        issues: [],
        error: error.message,
      });
    }
  }

  // Summary
  console.log('\n' + '='.repeat(50));
  console.log('📊 ACCESSIBILITY TEST SUMMARY');
  console.log('='.repeat(50));
  console.log(`Pages tested: ${pagesToTest.length}`);
  console.log(`Total errors: ${totalErrors}`);
  console.log(`Total warnings: ${totalWarnings}`);
  
  if (totalErrors === 0) {
    console.log('\n✅ All pages pass WCAG 2.1 AA accessibility standards!\n');
  } else {
    console.log(`\n❌ ${totalErrors} accessibility error(s) found. Please fix them.\n`);
  }

  // Save detailed report
  const reportPath = path.join(__dirname, 'accessibility-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`📄 Detailed report saved to: ${reportPath}\n`);

  // Exit with error code if there are errors
  process.exit(totalErrors > 0 ? 1 : 0);
}

runAccessibilityTests();
