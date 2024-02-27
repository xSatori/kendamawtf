import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = () => (
  <div className="footer-copyright">
    © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{' '}
    <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>.
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-lime-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
