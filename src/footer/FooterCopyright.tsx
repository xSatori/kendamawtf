import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = () => (
  <div className="footer-copyright">
    A Sweets x {' '}
    <a href="https://nouns.wtf">Nouns</a> thing.
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
