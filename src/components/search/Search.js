import React, { useState, useEffect } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImageResults from '../image-results/ImageResults';

const Search = () => {
	const [apiUrl] = useState('https://pixabay.com/api/');
	const [apiKey] = useState('24336452-8912d227d3e5c7a2a6b74f2d1');
	const [searchText, setSearchText] = useState('');
	const [amount, setAmount] = useState(15);
	const [images, setImages] = useState([]);

	useEffect(() => {
		if (searchText !== '') {
			getImages();
		} else {
			setImages([]);
		}
	}, [searchText, amount]);

	const getImages = async () => {
		const res = await axios.get(
			`${apiUrl}?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`
		);

		setImages(res.data.hits);
	};

	const onTextChange = (e) => {
		setSearchText(e.target.value);
		// if (e.target.value === '') {
		// 	setImages([]);
		// }
	};

	const onAmountChange = (e, index, value) => setAmount(value);

	return (
		<div>
			<TextField
				name='searchText'
				value={searchText}
				onChange={onTextChange}
				floatingLabelText='Search For Images'
				fullWidth={true}
			/>
			<br />
			<SelectField
				name='amount'
				floatingLabelText='Amount'
				value={amount}
				onChange={onAmountChange}>
				<MenuItem value={5} primaryText='5' />
				<MenuItem value={10} primaryText='10' />
				<MenuItem value={15} primaryText='15' />
				<MenuItem value={30} primaryText='30' />
				<MenuItem value={50} primaryText='50' />
			</SelectField>
			<br />
			{images.length > 0 ? <ImageResults images={images} /> : null}
		</div>
	);
};

export default Search;
