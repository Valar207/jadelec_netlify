/**
 * Decap CMS Preview Templates
 * Ces templates utilisent exactement les mêmes icônes SVG que les templates Nunjucks
 */

// Définition des icônes SVG - identiques à celles des templates Nunjucks
const icons = {
  shield: `<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
  </svg>`,
  location: `<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>`,
  bolt: `<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
  </svg>`,
  users: `<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
  </svg>`,
  check: `<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
  </svg>`,
  star: `<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
  </svg>`,
  clock: `<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>`,
  cpu: `<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
  </svg>`,
  sun: `<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
  </svg>`,
  building: `<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
  </svg>`,
  settings: `<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>`,
  phone: `<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
  </svg>`,
  arrow: `<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
  </svg>`
};

// Fonction utilitaire pour obtenir une icône
function getIcon(iconName) {
  return icons[iconName] || icons.bolt;
}

// Preview de la page d'accueil
const HomePreview = createClass({
  render: function() {
    const entry = this.props.entry;
    const hero = entry.getIn(['data', 'hero']);
    const services = entry.getIn(['data', 'services']);
    const stats = entry.getIn(['data', 'stats']);
    const whyUs = entry.getIn(['data', 'whyUs']);
    const cta = entry.getIn(['data', 'cta']);

    return h('div', {},
      // Hero Section
      hero && h('section', { className: 'hero-section' },
        h('div', { className: 'container' },
          h('div', { style: { maxWidth: '56rem' } },
            // Badge
            h('div', { className: 'hero-badge' },
              h('span', { className: 'dot' }),
              hero.get('badge')
            ),
            // Title
            h('h1', { className: 'hero-title' },
              h('span', {}, hero.get('title')),
              h('span', { className: 'hero-subtitle' }, hero.get('subtitle'))
            ),
            // Description
            h('p', { className: 'hero-description' }, hero.get('description')),
            // Buttons
            h('div', { className: 'hero-buttons' },
              hero.getIn(['ctaPrimary', 'text']) && h('a', { 
                href: hero.getIn(['ctaPrimary', 'url']), 
                className: 'hero-btn-primary' 
              },
                hero.getIn(['ctaPrimary', 'text']),
                h('span', { 
                  dangerouslySetInnerHTML: { __html: icons.arrow },
                  style: { marginLeft: '0.5rem', display: 'inline-flex' }
                })
              ),
              h('a', { href: '#', className: 'hero-btn-secondary' },
                h('span', { 
                  dangerouslySetInnerHTML: { __html: icons.phone },
                  style: { marginRight: '0.5rem', display: 'inline-flex' }
                }),
                hero.getIn(['ctaSecondary', 'showPhone']) ? '01 48 36 XX XX' : hero.getIn(['ctaSecondary', 'text'])
              )
            ),
            // Trust Badges
            hero.get('trustBadges') && h('div', { className: 'trust-badges' },
              hero.get('trustBadges').map((badge, index) =>
                h('div', { key: index, className: 'trust-badge' },
                  h('div', { className: 'trust-badge-icon' },
                    h('span', { dangerouslySetInnerHTML: { __html: getIcon(badge.get('icon')) } })
                  ),
                  h('div', {},
                    h('div', { className: 'trust-badge-title' }, badge.get('title')),
                    h('div', { className: 'trust-badge-subtitle' }, badge.get('subtitle'))
                  )
                )
              ).toArray()
            )
          )
        )
      ),

      // Services Section
      services && services.get('enabled') && h('section', { className: 'services-section' },
        h('div', { className: 'container' },
          h('div', { className: 'section-header' },
            h('span', { className: 'badge badge-primary' }, services.get('badge')),
            h('h2', { className: 'section-title' },
              services.get('title'), ' ',
              h('span', { className: 'gradient-text' }, services.get('titleHighlight'))
            ),
            h('p', { className: 'section-description' }, services.get('description'))
          ),
          services.get('items') && h('div', { className: 'services-grid' },
            services.get('items').map((service, index) =>
              h('div', { key: index, className: 'service-card' },
                h('div', { className: 'icon-container' },
                  h('span', { dangerouslySetInnerHTML: { __html: getIcon(service.get('icon')) } })
                ),
                h('h3', { className: 'service-card-title' }, service.get('title')),
                h('p', { className: 'service-card-description' }, service.get('description')),
                h('span', { className: 'service-card-link' },
                  'En savoir plus',
                  h('span', { 
                    dangerouslySetInnerHTML: { __html: icons.arrow },
                    style: { marginLeft: '0.5rem', display: 'inline-flex' }
                  })
                )
              )
            ).toArray()
          )
        )
      ),

      // Stats Section
      stats && stats.get('enabled') && h('section', { className: 'stats-section' },
        h('div', { className: 'container' },
          stats.get('items') && h('div', { className: 'stats-grid' },
            stats.get('items').map((stat, index) =>
              h('div', { key: index, className: 'stat-item' },
                h('div', { className: 'stat-value' }, stat.get('value')),
                h('div', { className: 'stat-label' }, stat.get('label'))
              )
            ).toArray()
          )
        )
      ),

      // Why Us Section
      whyUs && whyUs.get('enabled') && h('section', { className: 'why-us-section' },
        h('div', { className: 'container' },
          h('div', { className: 'why-us-grid' },
            h('div', {},
              h('span', { className: 'badge badge-primary' }, whyUs.get('badge')),
              h('h2', { className: 'section-title', style: { textAlign: 'left' } },
                whyUs.get('title'), ' ',
                h('span', { className: 'gradient-text' }, whyUs.get('titleHighlight'))
              ),
              h('p', { className: 'section-description', style: { textAlign: 'left', marginBottom: '2.5rem' } }, 
                whyUs.get('description')
              ),
              whyUs.get('features') && h('div', { className: 'feature-list' },
                whyUs.get('features').map((feature, index) =>
                  h('div', { key: index, className: 'feature-item' },
                    h('div', { className: 'feature-icon' },
                      h('span', { dangerouslySetInnerHTML: { __html: getIcon(feature.get('icon')) } })
                    ),
                    h('div', {},
                      h('h3', { className: 'feature-title' }, feature.get('title')),
                      h('p', { className: 'feature-description' }, feature.get('description'))
                    )
                  )
                ).toArray()
              )
            ),
            h('div', { className: 'why-us-image' },
              whyUs.get('image') && h('img', { 
                src: whyUs.get('image'), 
                alt: whyUs.get('imageAlt') || '' 
              })
            )
          )
        )
      ),

      // CTA Section
      cta && cta.get('enabled') && h('section', { className: 'cta-section' },
        h('div', { className: 'container' },
          h('h2', { className: 'cta-title' }, cta.get('title')),
          h('p', { className: 'cta-description' }, cta.get('description')),
          h('div', { className: 'cta-buttons' },
            cta.getIn(['primaryButton', 'text']) && h('a', { 
              href: cta.getIn(['primaryButton', 'url']), 
              className: 'btn btn-white' 
            },
              cta.getIn(['primaryButton', 'text']),
              h('span', { 
                dangerouslySetInnerHTML: { __html: icons.arrow },
                style: { marginLeft: '0.5rem', display: 'inline-flex' }
              })
            ),
            h('a', { href: '#', className: 'hero-btn-secondary' },
              h('span', { 
                dangerouslySetInnerHTML: { __html: icons.phone },
                style: { marginRight: '0.5rem', display: 'inline-flex' }
              }),
              cta.getIn(['secondaryButton', 'showPhone']) ? '01 48 36 XX XX' : cta.getIn(['secondaryButton', 'text'])
            )
          )
        )
      )
    );
  }
});

// Preview des services
const ServicePreview = createClass({
  render: function() {
    const entry = this.props.entry;
    const title = entry.getIn(['data', 'title']);
    const description = entry.getIn(['data', 'description']);
    const shortDescription = entry.getIn(['data', 'shortDescription']);
    const icon = entry.getIn(['data', 'icon']);
    const features = entry.getIn(['data', 'features']);
    const body = entry.getIn(['data', 'body']);

    return h('div', {},
      // Hero du service
      h('section', { className: 'hero-section', style: { minHeight: '40vh', padding: '3rem 1rem' } },
        h('div', { className: 'container' },
          h('div', { style: { maxWidth: '56rem' } },
            h('div', { className: 'hero-badge' },
              h('span', { className: 'dot' }),
              'Service'
            ),
            h('h1', { className: 'hero-title', style: { fontSize: '2.5rem' } }, title),
            h('p', { className: 'hero-description' }, description)
          )
        )
      ),
      
      // Contenu
      h('section', { className: 'services-section' },
        h('div', { className: 'container' },
          // Card de présentation
          h('div', { className: 'service-card', style: { marginBottom: '2rem' } },
            h('div', { className: 'icon-container' },
              h('span', { dangerouslySetInnerHTML: { __html: getIcon(icon) } })
            ),
            h('h3', { className: 'service-card-title' }, title),
            h('p', { className: 'service-card-description' }, shortDescription)
          ),
          
          // Points clés
          features && features.size > 0 && h('div', { style: { marginBottom: '2rem' } },
            h('h3', { className: 'section-title', style: { fontSize: '1.5rem', textAlign: 'left' } }, 'Points clés'),
            h('ul', { style: { listStyle: 'none', padding: 0 } },
              features.map((feature, index) =>
                h('li', { 
                  key: index, 
                  style: { 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.75rem',
                    marginBottom: '0.75rem',
                    color: '#374151'
                  } 
                },
                  h('span', { 
                    dangerouslySetInnerHTML: { __html: icons.check },
                    style: { color: '#3b6eb5', width: '1.25rem', height: '1.25rem' }
                  }),
                  feature
                )
              ).toArray()
            )
          ),
          
          // Contenu markdown
          h('div', { className: 'prose' }, this.props.widgetFor('body'))
        )
      )
    );
  }
});

// Preview des réalisations
const RealisationPreview = createClass({
  render: function() {
    const entry = this.props.entry;
    const title = entry.getIn(['data', 'title']);
    const description = entry.getIn(['data', 'description']);
    const category = entry.getIn(['data', 'category']);
    const images = entry.getIn(['data', 'images']);
    const client = entry.getIn(['data', 'client']);
    const location = entry.getIn(['data', 'location']);
    const year = entry.getIn(['data', 'year']);
    const body = entry.getIn(['data', 'body']);

    return h('div', {},
      // Hero
      h('section', { className: 'hero-section', style: { minHeight: '40vh', padding: '3rem 1rem' } },
        h('div', { className: 'container' },
          h('div', { style: { maxWidth: '56rem' } },
            h('div', { className: 'hero-badge' },
              h('span', { className: 'dot' }),
              category || 'Réalisation'
            ),
            h('h1', { className: 'hero-title', style: { fontSize: '2.5rem' } }, title),
            h('p', { className: 'hero-description' }, description)
          )
        )
      ),
      
      // Contenu
      h('section', { className: 'services-section' },
        h('div', { className: 'container' },
          // Images
          images && images.size > 0 && h('div', { 
            style: { 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1rem',
              marginBottom: '2rem'
            } 
          },
            images.map((img, index) => {
              // img peut être un string ou un objet Immutable
              const imgSrc = typeof img === 'string' ? img : (img && img.get ? img.get('image') : img);
              return h('img', { 
                key: index, 
                src: imgSrc, 
                alt: title,
                style: { 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover',
                  borderRadius: '0.75rem',
                  border: '1px solid #e5e7eb'
                }
              });
            }).toArray()
          ),
          
          // Infos
          h('div', { className: 'service-card', style: { marginBottom: '2rem' } },
            h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' } },
              client && h('div', {},
                h('div', { style: { fontSize: '0.875rem', color: '#6b7280' } }, 'Client'),
                h('div', { style: { fontWeight: '600' } }, client)
              ),
              location && h('div', {},
                h('div', { style: { fontSize: '0.875rem', color: '#6b7280' } }, 'Lieu'),
                h('div', { style: { fontWeight: '600' } }, location)
              ),
              year && h('div', {},
                h('div', { style: { fontSize: '0.875rem', color: '#6b7280' } }, 'Année'),
                h('div', { style: { fontWeight: '600' } }, year)
              )
            )
          ),
          
          // Contenu markdown
          h('div', { className: 'prose' }, this.props.widgetFor('body'))
        )
      )
    );
  }
});

// Preview de la page Contact
const ContactPreview = createClass({
  render: function() {
    const entry = this.props.entry;
    const page = entry.getIn(['data', 'page']);
    const contactInfo = entry.getIn(['data', 'contactInfo']);
    const emergency = entry.getIn(['data', 'emergency']);
    const form = entry.getIn(['data', 'form']);

    return h('div', {},
      h('section', { className: 'services-section' },
        h('div', { className: 'container' },
          // Header
          h('div', { className: 'section-header', style: { marginBottom: '3rem' } },
            h('h1', { className: 'section-title' }, page && page.get('title')),
            h('p', { className: 'section-description' }, page && page.get('description'))
          ),
          
          h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' } },
            // Contact Info
            h('div', {},
              h('div', { className: 'service-card', style: { marginBottom: '1.5rem' } },
                h('h2', { style: { fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' } }, 
                  contactInfo && contactInfo.get('title')
                ),
                h('div', { style: { display: 'flex', flexDirection: 'column', gap: '1rem' } },
                  h('div', { style: { display: 'flex', alignItems: 'flex-start', gap: '0.75rem' } },
                    h('span', { dangerouslySetInnerHTML: { __html: icons.location }, style: { color: '#3b6eb5' } }),
                    h('div', {},
                      h('div', { style: { fontWeight: '500' } }, contactInfo && contactInfo.get('addressLabel')),
                      h('div', { style: { color: '#6b7280' } }, '163 Av Paul Vaillant Couturier, 93120 La Courneuve')
                    )
                  ),
                  h('div', { style: { display: 'flex', alignItems: 'flex-start', gap: '0.75rem' } },
                    h('span', { dangerouslySetInnerHTML: { __html: icons.phone }, style: { color: '#3b6eb5' } }),
                    h('div', {},
                      h('div', { style: { fontWeight: '500' } }, contactInfo && contactInfo.get('phoneLabel')),
                      h('div', { style: { color: '#6b7280' } }, '01 48 35 50 51')
                    )
                  ),
                  h('div', { style: { display: 'flex', alignItems: 'flex-start', gap: '0.75rem' } },
                    h('span', { dangerouslySetInnerHTML: { __html: icons.clock }, style: { color: '#3b6eb5' } }),
                    h('div', {},
                      h('div', { style: { fontWeight: '500' } }, contactInfo && contactInfo.get('hoursLabel')),
                      h('div', { style: { color: '#6b7280' } }, 'Lun-Ven: 8h-18h')
                    )
                  )
                )
              ),
              
              // Emergency
              emergency && emergency.get('enabled') && h('div', { 
                style: { 
                  background: 'rgba(59, 110, 181, 0.1)', 
                  border: '1px solid rgba(59, 110, 181, 0.2)',
                  borderRadius: '0.75rem',
                  padding: '1.5rem'
                } 
              },
                h('h3', { style: { fontWeight: '700', marginBottom: '0.5rem' } }, emergency.get('title')),
                h('p', { style: { color: '#6b7280', marginBottom: '1rem' } }, emergency.get('description')),
                h('a', { 
                  href: '#', 
                  style: { color: '#3b6eb5', fontWeight: '500', display: 'inline-flex', alignItems: 'center' } 
                },
                  h('span', { dangerouslySetInnerHTML: { __html: icons.phone }, style: { marginRight: '0.5rem' } }),
                  emergency.get('buttonText') || '06 XX XX XX XX'
                )
              )
            ),
            
            // Form
            h('div', { className: 'service-card' },
              h('h2', { style: { fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem' } }, 
                form && form.get('title')
              ),
              h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' } },
                h('div', {},
                  h('label', { style: { display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' } }, 
                    form && form.getIn(['fields', 'name'])
                  ),
                  h('input', { 
                    type: 'text', 
                    placeholder: 'Votre nom',
                    style: { width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '0.5rem' }
                  })
                ),
                h('div', {},
                  h('label', { style: { display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' } }, 
                    form && form.getIn(['fields', 'email'])
                  ),
                  h('input', { 
                    type: 'email', 
                    placeholder: 'votre@email.com',
                    style: { width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '0.5rem' }
                  })
                )
              ),
              h('div', { style: { marginTop: '1rem' } },
                h('label', { style: { display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' } }, 
                  form && form.getIn(['fields', 'message'])
                ),
                h('textarea', { 
                  rows: 4,
                  placeholder: 'Votre message...',
                  style: { width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', resize: 'none' }
                })
              ),
              h('button', { 
                style: { 
                  marginTop: '1.5rem',
                  padding: '0.75rem 2rem',
                  background: '#3b6eb5',
                  color: 'white',
                  fontWeight: '600',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer'
                }
              }, form && form.get('submitButton'))
            )
          )
        )
      )
    );
  }
});

// Preview de la page Réalisations (liste)
const RealisationsPagePreview = createClass({
  render: function() {
    const entry = this.props.entry;
    const page = entry.getIn(['data', 'page']);
    const intro = entry.getIn(['data', 'intro']);
    const cta = entry.getIn(['data', 'cta']);
    const categories = entry.getIn(['data', 'categories']);

    return h('div', {},
      h('section', { className: 'services-section' },
        h('div', { className: 'container' },
          // Header
          h('div', { className: 'section-header' },
            intro && h('span', { className: 'badge badge-primary' }, intro.get('badge')),
            h('h1', { className: 'section-title' },
              intro && intro.get('title'), ' ',
              h('span', { className: 'gradient-text' }, intro && intro.get('titleHighlight'))
            ),
            h('p', { className: 'section-description' }, intro && intro.get('description'))
          ),
          
          // Categories
          categories && h('div', { style: { display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' } },
            categories.map((cat, index) =>
              h('span', { 
                key: index, 
                className: 'badge badge-primary',
                style: { cursor: 'pointer' }
              }, cat)
            ).toArray()
          ),
          
          // Placeholder cards
          h('div', { className: 'services-grid' },
            [1, 2, 3].map(i =>
              h('div', { key: i, className: 'service-card' },
                h('div', { 
                  style: { 
                    height: '200px', 
                    background: '#f3f4f6', 
                    borderRadius: '0.5rem',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9ca3af'
                  } 
                }, 'Image réalisation'),
                h('h3', { className: 'service-card-title' }, 'Exemple de réalisation ' + i),
                h('p', { className: 'service-card-description' }, 'Description de la réalisation...')
              )
            )
          ),
          
          // CTA
          cta && cta.get('enabled') && h('div', { 
            style: { 
              marginTop: '4rem',
              background: 'rgba(59, 110, 181, 0.1)',
              border: '1px solid rgba(59, 110, 181, 0.2)',
              borderRadius: '0.75rem',
              padding: '2rem',
              textAlign: 'center'
            } 
          },
            h('h2', { style: { fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' } }, cta.get('title')),
            h('p', { style: { color: '#6b7280', marginBottom: '1.5rem' } }, cta.get('description')),
            h('a', { 
              href: cta.get('buttonUrl'),
              className: 'hero-btn-primary',
              style: { display: 'inline-flex' }
            },
              cta.get('buttonText'),
              h('span', { dangerouslySetInnerHTML: { __html: icons.arrow }, style: { marginLeft: '0.5rem' } })
            )
          )
        )
      )
    );
  }
});

// Preview de la page 404
const Page404Preview = createClass({
  render: function() {
    const entry = this.props.entry;
    const page = entry.getIn(['data', 'page']);
    const buttons = page && page.get('buttons');
    const suggestions = page && page.get('suggestions');

    return h('div', {},
      h('section', { className: 'services-section', style: { textAlign: 'center', padding: '5rem 1rem' } },
        h('div', { className: 'container' },
          h('div', { style: { fontSize: '8rem', fontWeight: '700', color: '#3b6eb5', marginBottom: '1rem' } }, 
            page && page.get('code')
          ),
          h('h1', { style: { fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' } }, 
            page && page.get('heading')
          ),
          h('p', { style: { fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem' } }, 
            page && page.get('description')
          ),
          
          // Buttons
          h('div', { style: { display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' } },
            buttons && buttons.getIn(['home', 'text']) && h('a', { 
              href: buttons.getIn(['home', 'url']),
              className: 'hero-btn-primary'
            }, buttons.getIn(['home', 'text'])),
            buttons && buttons.getIn(['contact', 'enabled']) && h('a', { 
              href: buttons.getIn(['contact', 'url']),
              style: { 
                padding: '0.75rem 1.5rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.5rem',
                color: '#374151',
                fontWeight: '600'
              }
            }, buttons.getIn(['contact', 'text']))
          ),
          
          // Suggestions
          suggestions && suggestions.get('enabled') && h('div', { 
            style: { 
              marginTop: '3rem',
              paddingTop: '2rem',
              borderTop: '1px solid #e5e7eb'
            } 
          },
            h('p', { style: { color: '#6b7280', marginBottom: '1rem' } }, suggestions.get('title')),
            suggestions.get('links') && h('div', { style: { display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' } },
              suggestions.get('links').map((link, index) =>
                h('a', { 
                  key: index, 
                  href: link.get('url'),
                  style: { color: '#3b6eb5' }
                }, link.get('label'))
              ).toArray()
            )
          )
        )
      )
    );
  }
});

// Preview des Mentions Légales
const MentionsLegalesPreview = createClass({
  render: function() {
    const entry = this.props.entry;
    const page = entry.getIn(['data', 'page']);
    const sections = entry.getIn(['data', 'sections']);

    return h('div', {},
      h('section', { className: 'services-section' },
        h('div', { className: 'container', style: { maxWidth: '56rem' } },
          h('h1', { style: { fontSize: '2.5rem', fontWeight: '700', marginBottom: '2rem' } }, 
            page && page.get('title')
          ),
          
          // Éditeur
          sections && sections.get('editor') && h('div', { style: { marginBottom: '2rem' } },
            h('h2', { style: { fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' } }, 
              sections.getIn(['editor', 'title'])
            ),
            h('p', { style: { color: '#6b7280', marginBottom: '0.5rem' } }, 
              h('strong', {}, 'Entreprise: '), sections.getIn(['editor', 'companyName'])
            ),
            h('p', { style: { color: '#6b7280', marginBottom: '0.5rem' } }, 
              h('strong', {}, 'Forme juridique: '), sections.getIn(['editor', 'legalForm'])
            ),
            sections.getIn(['editor', 'siret']) && h('p', { style: { color: '#6b7280', marginBottom: '0.5rem' } }, 
              h('strong', {}, 'SIRET: '), sections.getIn(['editor', 'siret'])
            ),
            h('p', { style: { color: '#6b7280', marginBottom: '0.5rem' } }, 
              h('strong', {}, 'Adresse: '), sections.getIn(['editor', 'address'])
            ),
            h('p', { style: { color: '#6b7280', marginBottom: '0.5rem' } }, 
              h('strong', {}, 'Téléphone: '), sections.getIn(['editor', 'phone'])
            ),
            h('p', { style: { color: '#6b7280' } }, 
              h('strong', {}, 'Email: '), sections.getIn(['editor', 'email'])
            )
          ),
          
          // Hébergeur
          sections && sections.get('host') && h('div', { style: { marginBottom: '2rem' } },
            h('h2', { style: { fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' } }, 
              sections.getIn(['host', 'title'])
            ),
            h('p', { style: { color: '#6b7280', marginBottom: '0.5rem' } }, 
              h('strong', {}, 'Nom: '), sections.getIn(['host', 'name'])
            ),
            h('p', { style: { color: '#6b7280', marginBottom: '0.5rem' } }, 
              h('strong', {}, 'Adresse: '), sections.getIn(['host', 'address'])
            ),
            h('p', { style: { color: '#6b7280' } }, 
              h('strong', {}, 'Site: '), sections.getIn(['host', 'website'])
            )
          ),
          
          // Propriété intellectuelle
          sections && sections.get('intellectual') && h('div', { style: { marginBottom: '2rem' } },
            h('h2', { style: { fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' } }, 
              sections.getIn(['intellectual', 'title'])
            ),
            h('p', { style: { color: '#6b7280' } }, sections.getIn(['intellectual', 'content']))
          ),
          
          // Protection des données
          sections && sections.get('privacy') && h('div', { style: { marginBottom: '2rem' } },
            h('h2', { style: { fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' } }, 
              sections.getIn(['privacy', 'title'])
            ),
            h('p', { style: { color: '#6b7280' } }, sections.getIn(['privacy', 'content']))
          )
        )
      )
    );
  }
});

// Preview du Footer
const FooterPreview = createClass({
  render: function() {
    const entry = this.props.entry;
    const company = entry.getIn(['data', 'company']);
    const sections = entry.getIn(['data', 'sections']);
    const bottom = entry.getIn(['data', 'bottom']);

    return h('div', {},
      h('footer', { className: 'footer-section' },
        h('div', { className: 'container' },
          h('div', { className: 'footer-grid' },
            // Company
            h('div', {},
              h('div', { style: { height: '3rem', width: '8rem', background: '#374151', borderRadius: '0.25rem', marginBottom: '1.5rem' } }),
              h('p', { className: 'footer-text' }, company && company.get('description'))
            ),
            
            // Contact
            sections && sections.get('contact') && h('div', {},
              h('h3', { className: 'footer-title' }, sections.getIn(['contact', 'title'])),
              sections.getIn(['contact', 'showPhone']) && h('div', { style: { display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' } },
                h('span', { dangerouslySetInnerHTML: { __html: icons.phone }, style: { color: '#3b6eb5' } }),
                h('span', { className: 'footer-text' }, '01 48 35 50 51')
              ),
              sections.getIn(['contact', 'showEmail']) && h('div', { style: { display: 'flex', alignItems: 'center', gap: '0.75rem' } },
                h('span', { dangerouslySetInnerHTML: { __html: `<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>` }, style: { color: '#3b6eb5' } }),
                h('span', { className: 'footer-text' }, 'contact@jadelec.net')
              )
            ),
            
            // Hours
            sections && sections.get('hours') && h('div', {},
              h('h3', { className: 'footer-title' }, sections.getIn(['hours', 'title'])),
              h('p', { className: 'footer-text' }, 'Lun-Ven: 8h-18h'),
              sections.getIn(['hours', 'showEmergency']) && h('div', { style: { display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem', color: '#3b6eb5', fontSize: '0.875rem' } },
                h('span', { dangerouslySetInnerHTML: { __html: icons.bolt } }),
                h('span', {}, sections.getIn(['hours', 'emergencyText']))
              )
            ),
            
            // Services
            sections && sections.getIn(['services', 'showServices']) && h('div', {},
              h('h3', { className: 'footer-title' }, sections.getIn(['services', 'title'])),
              h('div', {},
                ['Courant fort', 'Courant faible', 'GTB / Domotique', 'Bornes IRVE'].map((service, i) =>
                  h('a', { key: i, className: 'footer-link' }, service)
                )
              )
            )
          ),
          
          // Bottom
          h('div', { className: 'footer-bottom' },
            h('p', {}, bottom && bottom.get('copyrightText'))
          )
        )
      )
    );
  }
});

// Preview de la Navigation
const NavigationPreview = createClass({
  render: function() {
    const entry = this.props.entry;
    const header = entry.getIn(['data', 'header']);
    const main = entry.getIn(['data', 'main']);
    const ctaButton = header && header.get('ctaButton');

    return h('div', {},
      h('header', { 
        style: { 
          background: 'white', 
          borderBottom: '1px solid #e5e7eb',
          padding: '1rem'
        } 
      },
        h('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '80rem', margin: '0 auto' } },
          // Logo
          header && header.get('logo') ? 
            h('img', { src: header.get('logo'), alt: header.get('logoAlt'), style: { height: '3rem' } }) :
            h('div', { style: { height: '3rem', width: '8rem', background: '#e5e7eb', borderRadius: '0.25rem' } }),
          
          // Navigation
          main && h('nav', { style: { display: 'flex', gap: '2rem' } },
            main.map((item, index) =>
              h('a', { 
                key: index, 
                href: item.get('url'),
                style: { color: '#374151', fontWeight: '500' }
              }, item.get('label'))
            ).toArray()
          ),
          
          // CTA + Phone
          h('div', { style: { display: 'flex', alignItems: 'center', gap: '1rem' } },
            header && header.get('showPhone') && h('a', { 
              href: '#',
              style: { display: 'flex', alignItems: 'center', color: '#374151' }
            },
              h('span', { dangerouslySetInnerHTML: { __html: icons.phone }, style: { color: '#3b6eb5', marginRight: '0.5rem' } }),
              '01 48 35 50 51'
            ),
            ctaButton && ctaButton.get('enabled') && h('a', { 
              href: ctaButton.get('url'),
              className: 'hero-btn-primary',
              style: { padding: '0.5rem 1rem', fontSize: '0.875rem' }
            }, ctaButton.get('text'))
          )
        )
      )
    );
  }
});

// Preview des Sections (Témoignages, FAQ, Galerie)
const SectionsPreview = createClass({
  render: function() {
    const entry = this.props.entry;
    const testimonials = entry.getIn(['data', 'testimonials']);
    const faq = entry.getIn(['data', 'faq']);
    const gallery = entry.getIn(['data', 'gallery']);

    return h('div', {},
      // Testimonials
      testimonials && testimonials.get('enabled') && h('section', { className: 'services-section', style: { background: 'white' } },
        h('div', { className: 'container' },
          h('div', { className: 'section-header' },
            h('span', { className: 'badge badge-primary' }, 'Témoignages'),
            h('h2', { className: 'section-title' }, testimonials.get('title'))
          ),
          testimonials.get('items') && h('div', { className: 'services-grid' },
            testimonials.get('items').map((item, index) =>
              h('div', { key: index, className: 'service-card' },
                // Stars
                h('div', { style: { display: 'flex', marginBottom: '1rem' } },
                  Array.from({ length: item.get('rating') || 5 }).map((_, i) =>
                    h('svg', { 
                      key: i, 
                      style: { width: '1.25rem', height: '1.25rem', color: '#fbbf24' },
                      fill: 'currentColor',
                      viewBox: '0 0 20 20'
                    },
                      h('path', { d: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' })
                    )
                  )
                ),
                h('p', { style: { color: '#6b7280', fontStyle: 'italic', marginBottom: '1rem' } }, '"' + item.get('text') + '"'),
                h('div', { style: { display: 'flex', alignItems: 'center' } },
                  h('div', { 
                    style: { 
                      width: '3rem', 
                      height: '3rem', 
                      borderRadius: '50%', 
                      background: 'rgba(59, 110, 181, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '1rem',
                      color: '#3b6eb5',
                      fontWeight: '700'
                    } 
                  }, item.get('name') ? item.get('name').charAt(0).toUpperCase() : 'A'),
                  h('div', {},
                    h('div', { style: { fontWeight: '600' } }, item.get('name')),
                    item.get('company') && h('div', { style: { fontSize: '0.875rem', color: '#6b7280' } }, item.get('company'))
                  )
                )
              )
            ).toArray()
          )
        )
      ),
      
      // FAQ
      faq && faq.get('enabled') && h('section', { className: 'services-section' },
        h('div', { className: 'container', style: { maxWidth: '48rem' } },
          h('div', { className: 'section-header' },
            h('span', { className: 'badge badge-primary' }, 'FAQ'),
            h('h2', { className: 'section-title' }, faq.get('title'))
          ),
          faq.get('items') && h('div', { style: { display: 'flex', flexDirection: 'column', gap: '1rem' } },
            faq.get('items').map((item, index) =>
              h('div', { key: index, className: 'service-card' },
                h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
                  h('h3', { style: { fontWeight: '600' } }, item.get('question')),
                  h('span', { dangerouslySetInnerHTML: { __html: `<svg style="width:1.25rem;height:1.25rem;color:#6b7280" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>` } })
                ),
                h('p', { style: { color: '#6b7280', marginTop: '0.75rem' } }, item.get('answer'))
              )
            ).toArray()
          )
        )
      ),
      
      // Gallery
      gallery && gallery.get('enabled') && h('section', { className: 'services-section', style: { background: 'white' } },
        h('div', { className: 'container' },
          h('div', { className: 'section-header' },
            h('span', { className: 'badge badge-primary' }, 'Galerie'),
            h('h2', { className: 'section-title' }, gallery.get('title'))
          ),
          gallery.get('images') && h('div', { 
            style: { 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1rem' 
            } 
          },
            gallery.get('images').map((img, index) =>
              h('img', { 
                key: index, 
                src: img.get('url'), 
                alt: img.get('alt'),
                style: { 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover',
                  borderRadius: '0.75rem',
                  border: '1px solid #e5e7eb'
                }
              })
            ).toArray()
          )
        )
      )
    );
  }
});

// Preview du Site Settings
const SitePreview = createClass({
  render: function() {
    const entry = this.props.entry;
    const name = entry.getIn(['data', 'name']);
    const tagline = entry.getIn(['data', 'tagline']);
    const description = entry.getIn(['data', 'description']);
    const phone = entry.getIn(['data', 'phone']);
    const email = entry.getIn(['data', 'email']);
    const address = entry.getIn(['data', 'address']);

    return h('div', {},
      h('section', { className: 'services-section' },
        h('div', { className: 'container', style: { maxWidth: '48rem' } },
          h('div', { className: 'section-header' },
            h('span', { className: 'badge badge-primary' }, 'Paramètres'),
            h('h2', { className: 'section-title' }, 'Informations du site')
          ),
          
          h('div', { className: 'service-card' },
            h('div', { style: { display: 'grid', gap: '1.5rem' } },
              h('div', {},
                h('label', { style: { fontSize: '0.875rem', color: '#6b7280' } }, 'Nom de l\'entreprise'),
                h('div', { style: { fontSize: '1.25rem', fontWeight: '700' } }, name)
              ),
              h('div', {},
                h('label', { style: { fontSize: '0.875rem', color: '#6b7280' } }, 'Slogan'),
                h('div', { style: { fontWeight: '500' } }, tagline)
              ),
              h('div', {},
                h('label', { style: { fontSize: '0.875rem', color: '#6b7280' } }, 'Description SEO'),
                h('div', { style: { color: '#374151' } }, description)
              ),
              h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' } },
                h('div', {},
                  h('label', { style: { fontSize: '0.875rem', color: '#6b7280' } }, 'Téléphone'),
                  h('div', { style: { display: 'flex', alignItems: 'center', gap: '0.5rem' } },
                    h('span', { dangerouslySetInnerHTML: { __html: icons.phone }, style: { color: '#3b6eb5' } }),
                    phone
                  )
                ),
                h('div', {},
                  h('label', { style: { fontSize: '0.875rem', color: '#6b7280' } }, 'Email'),
                  h('div', {}, email)
                )
              ),
              address && h('div', {},
                h('label', { style: { fontSize: '0.875rem', color: '#6b7280' } }, 'Adresse'),
                h('div', { style: { display: 'flex', alignItems: 'flex-start', gap: '0.5rem' } },
                  h('span', { dangerouslySetInnerHTML: { __html: icons.location }, style: { color: '#3b6eb5' } }),
                  h('span', {}, 
                    address.get('street'), ', ',
                    address.get('postalCode'), ' ',
                    address.get('city')
                  )
                )
              )
            )
          )
        )
      )
    );
  }
});

// Enregistrement des previews
CMS.registerPreviewTemplate('home', HomePreview);
CMS.registerPreviewTemplate('services', ServicePreview);
CMS.registerPreviewTemplate('contact', ContactPreview);
CMS.registerPreviewTemplate('realisations-page', RealisationsPagePreview);
CMS.registerPreviewTemplate('404', Page404Preview);
CMS.registerPreviewTemplate('mentions-legales', MentionsLegalesPreview);
CMS.registerPreviewTemplate('footer', FooterPreview);
CMS.registerPreviewTemplate('navigation', NavigationPreview);
CMS.registerPreviewTemplate('sections', SectionsPreview);
CMS.registerPreviewTemplate('site', SitePreview);

// Enregistrement du CSS de preview
CMS.registerPreviewStyle('/admin/preview.css');

console.log('Decap CMS Preview Templates chargés avec succès - Toutes les pages');
