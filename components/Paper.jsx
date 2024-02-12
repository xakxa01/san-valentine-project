"use client"

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import ButtonsEditor from './ButtonsEditor'

const Paper = () => {
	const editor = useEditor({
		extensions: [StarterKit],
		content: ` <h3> Escribe que quieres de san valentín <3 </h1> <br/>`,
	})

	return <div className="bg-white w-9/12 h-52 rounded-t-xl m-auto transform -translate-y-24 flex flex-col">
		<EditorContent editor={editor} className='p-2 h-full' />

		<ButtonsEditor editor={editor} />
	</div>
};

export default Paper;
