import { getPosts } from "@/utils/utils";
import { Grid, RevealFx } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  columns?: "1" | "2";
}

export function Projects({ range, exclude, columns = "2" }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Grid
      fillWidth
      columns={columns}
      s={{ columns: 1 }}
      gap="24"
      marginBottom="40"
      paddingX="l"
    >
      {displayedProjects.map((post, index) => (
        <RevealFx
          key={post.slug}
          fillWidth
          translateY="16"
          delay={Math.min(index, 6) * 0.1}
        >
          <ProjectCard
            priority={index < 2}
            href={`/work/${post.slug}`}
            images={post.metadata.images}
            title={post.metadata.title}
            description={post.metadata.summary}
            content={post.content}
            tags={post.metadata.tags}
            link={post.metadata.link}
            github={post.metadata.github}
            hideCaseStudy={post.metadata.hideCaseStudy}
          />
        </RevealFx>
      ))}
    </Grid>
  );
}
