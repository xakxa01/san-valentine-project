import { IconH1, IconH2, IconH3, IconListNumbers, IconList } from '@tabler/icons-react';

const ButtonsEditor = ({ editor }) => {
	if (!editor) return null;

	const editorFocus = editor.chain().focus();
	const headingLevel = (level) => editorFocus.toggleHeading({ level }).run();

	const arrayButtons = [
		{
			icon: IconH1,
			event: () => headingLevel(1)
		},
		{
			icon: IconH2,
			event: () => headingLevel(2)
		},
		{
			icon: IconH3,
			event: () => headingLevel(3)
		},
		{
			icon: IconList,
			event: () => editorFocus.toggleBulletList().run()
		},
		{
			icon: IconListNumbers,
			event: () => editorFocus.toggleOrderedList().run()
		},
	]

	return <div className='flex justify-center items-center'>
		{arrayButtons.map(({ icon: Icon, event }, index) => (
			<button
				key={index}
				onClick={event}
				className="text-slate-300 hover:text-pastel-pink m-1"
			>
				<Icon size={20} />
			</button >
		))}
	</div>
};
export default ButtonsEditor;
