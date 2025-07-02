import {postPart, PostPartProps} from "../components/post-part.ts";

const parts: PostPartProps[] = [
    {
        titleKey: 'post.part1.title',
        contentKey: 'post.part1.content'
    },
    {
        titleKey: 'post.part2.title',
        contentKey: 'post.part2.content'
    },
    {
        titleKey: 'post.part3.title',
        contentKey: 'post.part3.content'
    },
    {
        titleKey: 'post.part4.title',
        contentKey: 'post.part4.content'
    },
    {
        titleKey: 'post.part5.title',
        contentKey: 'post.part5.content'
    },
];

const post = `
<section class="post">
    ${parts.map(postPart).join('\n')}
</section>
`;

export default post;