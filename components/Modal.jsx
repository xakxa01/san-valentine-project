import { Modal, ModalContent, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import Image from "next/image";
import styles from "@/styles/modal.module.css";
import { images } from "@/lib/images";
import Link from "next/link";

const ModalComponent = ({ onClose, isOpen }) => (
	<Modal
		size="lg"
		isDismissable
		isOpen={isOpen}
		hideCloseButton
		onClose={onClose}
	>
		<ModalContent>
			{(onClose) => (
				<div className={styles.modal}>
					<ModalBody>
						<div className={styles.xaviHeart}>
							<Image
								width={300}
								height={300}
								alt='xavi heart'
								src={images.xaviHeart}
							/>
						</div>

						<p className={styles.message}>
							pa que quiere tu to eso
							si me tienes a mi? 😘💖

							<br /> <br />

							te amo culona uwu 💖
						</p>

					</ModalBody>

					<ModalFooter>
						<Link href='/LoveCard' className={styles.modalBtn} >
							continuar
						</Link>
					</ModalFooter>
				</div>
			)}
		</ModalContent>
	</Modal>
);

export default ModalComponent;
