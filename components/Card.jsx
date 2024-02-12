"use client"

import { useState } from "react";
import styles from "../styles/card.module.css";
import { IconHeartFilled } from '@tabler/icons-react';
import { twc } from "@/lib/tailwindCondition";

const Card = () => {
	const [openCard, setOpenCard] = useState(false);

	const handleOpenCard = () => setOpenCard(!openCard);

	return <div className={styles.container}>
		<div className={twc(
			{
				[styles.topCardOpen]: openCard,
				[styles.topCardClose]: !openCard
			},
			styles.topCard
		)}>
			<button
				className={styles.heartButton}
				onClick={handleOpenCard}
			>
				<IconHeartFilled
					size={50}
					className={styles.heart}
				/>
			</button>
		</div>

		<button className={styles.message} />

		<div className={styles.cardContainer} />
	</ div>
};

export default Card;
