const Footer: React.FC = () => {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Intazar Khan</p>

        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/INTAZARKHAN?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>

          <a
            href="https://web.facebook.com/profile.php?id=61580219716014"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
