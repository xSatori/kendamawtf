import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
// import { Section as LayoutSection } from '../layout/Section';

const VerticalFeatures = () => (
  <>
    <VerticalFeatureRow
      title="Mindfulness Through Play"
      description="The 'Mindfulness Through Play' program by the Sweets Kendamas Foundation merges fun with mental well-being, using kendama to promote mindfulness and concentration. Participants engage in kendama's focused activity, finding a unique way to achieve a peaceful state of mind. This initiative not only enhances physical skills but also underscores mental health benefits, offering a novel approach to mindfulness. Through various activities, it encourages living in the moment, stress reduction, and joy in play."
      image="/assets/images/SKF.png"
      imageAlt="Sweets Kendamas Foundation"
    />
    <VerticalFeatureRow
      title="Nouns DAO"
      description="Nouns DAO is a groundbreaking decentralized autonomous organization exploring new frontiers in community engagement and project funding. While not directly related to kendama, the principles of creativity, community, and collaboration resonate with the kendama ethos. Nouns DAO's innovative approach to governance and project support offers intriguing possibilities for collaborations within the kendama community and beyond. Learn more about how Nouns DAO is shaping the future of collective action and creativity."
      image="/assets/images/noggles.png"
      imageAlt="Nouns DAO"
      reverse
    />
    <VerticalFeatureRow
      title="How to Get Involved"
      description="The kendama journey is one of personal growth, community, and fun. Whether you're new to kendama or a seasoned player, there are numerous ways to get involved. Join us at Sweets Kendamas events, support the Sweets Kendamas Foundation's initiatives, or dive into the world of Nouns DAO and discover how you can contribute to its visionary projects. Everyone is welcome in the kendama community, and we can't wait for you to be part of our story."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </>
);

export { VerticalFeatures };
