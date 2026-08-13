function Navigation({ currentSection, onNavClick }) {
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav>
      <ul>
        {sections.map((section) => (
          <li key={section}>
            <button
              onClick={() => onNavClick(section)}
              style={{ fontWeight: currentSection === section ? 'bold' : 'normal' }}
              aria-current={currentSection === section ? 'page' : undefined}
            >
              {section}
            </button>
          </li>
        ))}
         </ul>
    </nav>
  );
}

export default Navigation;
