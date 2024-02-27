import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="What exactly is kendama?"
    description="Welcome to the enchanting world of kendama, a traditional Japanese skill toy that has captivated hearts worldwide. Kendama consists of a handle (ken), two cups (sara), and a ball (tama) connected by a string. This simple yet profound toy offers endless possibilities for tricks, creativity, and skill development. Originating from Japan, kendama has a rich history and has evolved into a global community of enthusiasts. Discover the joy and benefits of kendama, from improving hand-eye coordination to fostering a sense of community."
  >
    <VerticalFeatureRow
      title="Mindfulness Through Play"
      description="The "Mindfulness Through Play" program by the Sweets Kendamas Foundation merges fun with mental well-being, using kendama to promote mindfulness and concentration. Participants engage in kendama's focused activity, finding a unique way to achieve a peaceful state of mind. This initiative not only enhances physical skills but also underscores mental health benefits, offering a novel approach to mindfulness. Through various activities, it encourages living in the moment, stress reduction, and joy in play."
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
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
