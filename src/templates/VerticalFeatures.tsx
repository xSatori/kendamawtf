import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Ready to learn more about Kendama?"
    description="Kendama is a traditional Japanese skill toy that consists of a handle (ken), a pair of cups (sarado), and a ball (tama) connected by a string. Its origins can be traced back several centuries, with roots in both Japanese and Western cultures. The modern kendama evolved from the classic Japanese game called "Hyakunin Isshu Karuta" and the French cup-and-ball game "bilboquet." Over time, kendama has evolved from a simple children's toy into a tool for art, competition, and mindfulness, attracting a global following. Today, it is not only a popular pastime but also a medium for educational programs, community-building activities, and a fantastic way to disconnect from your screens."
  >
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/whatiskendama1.png"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/whatiskendama1.png"
      imageAlt="Second feature alt text"
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
