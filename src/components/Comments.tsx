import Giscus from "@giscus/react";

interface CommentsProps {
  postId: string;
}

const Comments = ({ postId }: CommentsProps) => {
  const GISCUS_CONFIG = {
    repo: "keiidevv/neat-coders-corner" as `${string}/${string}`,
    repoId: "R_kgDOPTmFGw",
    category: "General",
    categoryId: "DIC_kwDOPTmFG84Ctd0u",
  };

  return (
    <div className="mt-12 pt-8 border-t border-border">
      <h3 className="text-xl font-semibold mb-6 text-foreground">댓글</h3>
      <div className="bg-card rounded-lg p-4">
        <Giscus
          id="comments"
          repo={GISCUS_CONFIG.repo}
          repoId={GISCUS_CONFIG.repoId}
          category={GISCUS_CONFIG.category}
          categoryId={GISCUS_CONFIG.categoryId}
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          theme="preferred_color_scheme"
          lang="ko"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Comments;
