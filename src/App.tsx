import { SkillProvider, SkillTreeGroup, SkillTree } from 'beautiful-skill-tree';

function App() {
  return (
    <div>
    // <div headercontent />
      <SkillProvider>
        <SkillTreeGroup>
          {() => {
            return (
              <SkillTree treeId="basic-birch" title="First Skill Tree" data={[]} />
            )
          }}
        </SkillTreeGroup>
      </SkillProvider>
    </div>
  );
}

