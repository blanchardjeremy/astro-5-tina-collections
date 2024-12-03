import { dateFormat } from "@lib/utils/dateFormat";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { PostQuery, PostQueryVariables } from "tina/__generated__/types";
import { useTina, tinaField } from "tinacms/dist/react";

interface Props {
	tinaProps: {
		variables: PostQueryVariables;
		data: PostQuery;
		query: string;
	};
}

export default function PostLayout({ tinaProps }: Props) {
	const { data } = useTina(tinaProps);

	const { post } = data;

	return (
		<>
			<div className="container">
				<div className="row justify-content-center text-center my-5">
					<div className="col-lg-10">
						{post.categories &&
							post.categories.map((categorie) => (
								<span className="link-tag text-dark">
									{categorie}
								</span>
							))}
						<h1 className="mb-4 text-center" data-tina-field={tinaField(post, 'title')}>{post.title}</h1>
						<p className="small mb-5 text-center" data-tina-field={tinaField(post, 'date')}>
							<span className="text-uppercase">{dateFormat(post.date)}</span>
						</p>
					</div>
				</div>
			</div>

			<div className="bg-skew bg-skew-light">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<article className="pb-2" data-tina-field={tinaField(post, 'body')}>
								<TinaMarkdown content={post.body}></TinaMarkdown>

								<p className="mt-5 text-center">
									{post.tags && (
										<span className="text-secondary">Tagged: </span>
									)}
									{post.tags &&
										post.tags.map((tag, index) => (
											<span key={tag}>
												<span className="link-tag text-dark">#{tag}</span>
											</span>
										))}
								</p>
							</article>

							{/*TOOD: add slugPrev and slugNext */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
