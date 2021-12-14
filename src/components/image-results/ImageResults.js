import React, { useState } from 'react';
import { GridList, GridTile } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const ImageResults = ({ images }) => {
	const [open, setOpen] = useState(false);
	const [currentImage, setCurrentImage] = useState({});

	const handleOpen = (img) => {
		setOpen(true);
		setCurrentImage(img);
	};

	const handleClose = () => {
		setOpen(false);
	};

	let imageListContent;

	if (images) {
		imageListContent = (
			<GridList cols={3}>
				{images.map((image) => (
					<GridTile
						title={image.tags}
						key={image.id}
						subtitle={
							<span>
								by <strong>{image.user}</strong>
							</span>
						}
						actionIcon={
							<IconButton
								onClick={() => {
									handleOpen(image.largeImageURL);
								}}>
								<ZoomIn color='white' />
							</IconButton>
						}>
						<img src={image.largeImageURL} />
					</GridTile>
				))}
			</GridList>
		);
	} else {
		imageListContent = null;
	}

	const actions = [
		<FlatButton label='Close' primary={true} onClick={handleClose} />,
	];

	return (
		<div>
			{imageListContent}
			<Dialog
				actions={actions}
				modal={false}
				open={open}
				onRequestClose={handleClose}>
				<img src={currentImage} alt='' style={{ width: '100%' }} />
			</Dialog>
		</div>
	);
};

export default ImageResults;
