"use client"

import styles from "@/styles/printer.module.css";
import Image from "next/image";
import Paper from "./Paper";
import { images } from "@/lib/images";
import Card from "./Card";
import { useEffect, useState } from "react";
import { twc } from "@/lib/tailwindCondition";

const Printer = () => {
	const [showCard, setShowCard] = useState(false);
	const [getPaper, setGetPaper] = useState(false);
	const [wiggleAnimation, setWiggleAnimation] = useState(false);

	const handleButton = () => {
		setGetPaper(true);

		setTimeout(() => setShowCard(true), 3000);
	}

	useEffect(() => {
		if (getPaper && !showCard) setTimeout(() => setWiggleAnimation(true), 600);
		else setWiggleAnimation(false);
	}, [getPaper, showCard]);

	return <div className={twc(
		{ [styles.wiggleAnimation]: wiggleAnimation },
		styles.container
	)}>
		<div className={styles.back} >
			<div className={twc(
				{ "translate-y-52": getPaper },
				'transition-all z-10'
			)}>
				<Paper />
			</div>
		</div>

		<div className={styles.box}>
			<div className={styles.topBar}>
				<button
					className={styles.button}
					onClick={handleButton}
				/>

				<Image
					src={images.heartSticker}
					alt="heart sticker"
					height={53}
					width={62}
				/>
			</div>

			<div className={styles.printerMouthContainer}>
				<div className={styles.printerMouth} />

				<div className={twc(
					{
						"-mt-48": !showCard,
						"mt-24 animate-jump": showCard,
					},
					'transition-all'
				)}>
					<Card showCard={showCard} />
				</div>
			</div>
		</div>
	</div>;
};

export default Printer;
