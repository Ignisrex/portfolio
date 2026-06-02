import { Column, Heading, RevealFx, Text, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth maxWidth="s" horizontal="center" align="center" gap="16" marginBottom="xl">
        <RevealFx fillWidth horizontal="center" translateY="4">
          <Heading variant="display-strong-m" align="center">
            Projects
          </Heading>
        </RevealFx>
        <RevealFx fillWidth horizontal="center" translateY="8" delay={0.1}>
          <Text variant="heading-default-l" onBackground="neutral-weak" wrap="balance">
            A collection of projects exploring backend systems, real-time workflows, developer tools, game dev, and product-focused engineering.
          </Text>
        </RevealFx>
      </Column>
      <Projects />
    </Column>
  );
}
