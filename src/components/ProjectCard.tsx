"use client";

import {
  Card,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  Media,
  Row,
  SmartLink,
  Tag,
  Text,
} from "@once-ui-system/core";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  tags?: string[];
  link?: string;
  github?: string;
  hideCaseStudy?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  priority,
  images = [],
  title,
  content,
  description,
  tags = [],
  link,
  github,
  hideCaseStudy,
}) => {
  // A case study exists when the MDX has body content — but it can be hidden
  // per-project via the `hideCaseStudy` frontmatter flag.
  const showCaseStudy = Boolean(content?.trim()) && !hideCaseStudy;
  const cover = images?.[0];

  // Where clicking the card takes you: the case study when shown, otherwise a
  // live demo, otherwise the repo. If none exist the card simply isn't a link.
  const cardHref = showCaseStudy ? href : link || github || undefined;

  return (
    <Card
      fillWidth
      direction="column"
      radius="l"
      border="neutral-alpha-weak"
      background="surface"
      className={styles.card}
    >
      {/* Stretched link — makes the whole card clickable without nesting anchors */}
      {cardHref && (
        <SmartLink
          href={cardHref}
          className={styles.cardLink}
          aria-label={`Open ${title}`}
        >
          <span />
        </SmartLink>
      )}

      {cover && (
        <Flex fillWidth className={styles.cover}>
          <Media
            priority={priority}
            sizes="(max-width: 960px) 100vw, 480px"
            aspectRatio="16 / 9"
            alt={title}
            src={cover}
            className={styles.coverMedia}
          />
        </Flex>
      )}

      <Column fillWidth gap="12" padding="l" className={styles.body}>
        {title && (
          <Heading as="h2" wrap="balance" variant="heading-strong-l">
            {title}
          </Heading>
        )}

        {description?.trim() && (
          <Text
            wrap="balance"
            variant="body-default-s"
            onBackground="neutral-weak"
          >
            {description}
          </Text>
        )}

        {tags.length > 0 && (
          <Row gap="8" wrap paddingTop="4">
            {tags.map((tag) => (
              <Tag key={tag} size="s" variant="neutral">
                {tag}
              </Tag>
            ))}
          </Row>
        )}

        {(github || link || showCaseStudy) && (
          <Row
            fillWidth
            horizontal="between"
            vertical="center"
            paddingTop="12"
            gap="8"
          >
            {/* Action icons sit above the stretched link via z-index in SCSS */}
            <Row gap="8" className={styles.actions}>
              {github && (
                <IconButton
                  icon="github"
                  href={github}
                  size="m"
                  variant="tertiary"
                  tooltip="View source"
                  tooltipPosition="top"
                />
              )}
              {link && (
                <IconButton
                  icon="arrowUpRightFromSquare"
                  href={link}
                  size="m"
                  variant="tertiary"
                  tooltip="Live demo"
                  tooltipPosition="top"
                />
              )}
            </Row>

            {showCaseStudy && (
              <Row
                vertical="center"
                gap="8"
                paddingX="8"
                className={styles.readMore}
              >
                <Text variant="label-default-s" onBackground="brand-medium">
                  Case study
                </Text>
                <Icon name="arrowRight" size="xs" onBackground="brand-medium" />
              </Row>
            )}
          </Row>
        )}
      </Column>
    </Card>
  );
};
