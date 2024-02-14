"use client"

import { useState } from "react";
import styles from "../styles/card.module.css";
import { IconHeartFilled } from '@tabler/icons-react';
import { twc } from "@/lib/tailwindCondition";
import ModalComponent from "./Modal";

const Card = () => {
	const [openCard, setOpenCard] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	const handleOpenCard = () => setOpenCard(!openCard);

	const toggleModal = () => setOpenModal(!openModal);

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

		<button
			onClick={toggleModal}
			className={styles.message}
		/>

		<ModalComponent
			isOpen={openModal}
			onClose={toggleModal}
		/>

		<div className={styles.cardContainer} />
	</ div>
};

export default Card;
