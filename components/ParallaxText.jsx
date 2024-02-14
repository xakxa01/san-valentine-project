import { useId } from 'react';
import styles from "../styles/parallaxText.module.css"
import { IconHeartFilled } from '@tabler/icons-react';

export default function ParallaxText() {
	const id = useId();

	if (typeof window === 'object') {
		let position = document.documentElement;
		position.addEventListener("mousemove", e => {
			position.style.setProperty('--x', e.clientX + 'px')
		});
	}

	const numberWords = [...Array(200)];
	const numberLines = [...Array(16)];

	return (
		<section className={styles.section} >
			<div className={styles.text}>
				{numberLines.map(() => (
					<h2 key={id} className={styles.letterContainer} >
						{numberWords.map(() => (
							<IconHeartFilled
								key={id}
								size={50}
							/>
						))}
					</h2>
				))}
			</div>
		</section>
	)
}