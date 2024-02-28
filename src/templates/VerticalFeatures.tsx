import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
// import { Section as LayoutSection } from '../layout/Section';

const VerticalFeatures = () => (
  <>
    <VerticalFeatureRow
      images={[
        { src: '/assets/images/whatiskendama1.png', alt: 'What is Kendama? 1' },
        { src: '/assets/images/whatiskendama2.png', alt: 'What is Kendama? 2' },
      ]}
    />
    <VerticalFeatureRow
      title="Mindfulness Through Play"
      description="Kendama offers a unique and engaging alternative for mindfulness practice by demanding complete focus and hand-eye coordination. This captivating activity not only helps to clear the mind of distractions but also fosters a meditative state through its rhythmic motions and the challenge of mastering intricate tricks, making it an excellent tool for cultivating presence and concentration. The Sweets Kendama's Foundation has embodied this aspect of kendama in their 'Mindfulness Through Play' programs, which merge fun with mental well-being. These programs not only enhance physical skills like dexterity and hand-eye coordination, but also underscore mental health benefits, offering a novel approach to mindfulness. Through various exercises, it encourages living in the moment, stress reduction, and compassionate play. Learn more about the Foundation’s programs at sweetsoendamasfoundation.org."
      image="/assets/images/SKF.png"
      imageAlt="Sweets Kendamas Foundation"
    />
    <VerticalFeatureRow
      title="Nouns DAO"
      description="Nouns DAO is a groundbreaking decentralized autonomous organization exploring new frontiers in community engagement and public goods funding. While not directly related to kendama, the principles of creativity, community, and collaboration resonate with the ethos of the kendama community. Nouns DAO's innovative approach to governance, proliferation, annd public goods funding, offers intriguing possibilities for collaborations within the kendama community and beyond. Learn more about how Nouns DAO is shaping the future of collective action and creativity at nouns.wtf."
      image="/assets/images/noggles.png"
      imageAlt="Nouns DAO"
      reverse
    />
    <VerticalFeatureRow
      title="How to Get Involved"
      description="While very collaborative, both kendama and Nouns are ultimately a personal journey of growth. No matter what your knowledge or skill level, there is a way for you to contribute and get involved. Just get plugged into any of these communities and start asking questions! We can't wait for you to be part of our story."
      image="/assets/images/poap.gif"
      imageAlt="POAP Token"
    />
  </>
);

export { VerticalFeatures };
