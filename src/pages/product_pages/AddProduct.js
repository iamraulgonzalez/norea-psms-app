import React, { useState } from 'react';
import { Modal, Form, Input, Button, message, Upload } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import Loading from '../../customs/Laoding';
import { storage } from '../../helpers/firebase';
import { getDownloadURL, ref as storageRef, uploadBytes } from 'firebase/storage';
import axios from 'axios';
import { BASE_URL } from '../../api/config';

const { Dragger } = Upload;

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    return isJpgOrPng;
};

const AddProduct = ({ open, handleCloseAddNewProduct, fetchProducts }) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [imageToUpload, setImageToUpload] = useState(null);

    const handleUploadToFirebase = async (image) => {
        try {
            setLoading(true);
            const imageRef = storageRef(storage, `images/products/${Date.now()}-${image.name}`);
            const snapshot = await uploadBytes(imageRef, image);
            const downloadUrl = await getDownloadURL(snapshot.ref);
            setLoading(false);
            return downloadUrl;
        } catch (error) {
            console.error('Error uploading image to Firebase:', error);
            setLoading(false);
            message.error('Failed to upload image to Firebase.');
            return null;
        }
    };

    const handleAddProduct = async () => {
        try {
            setLoading(true);
            const values = await form.validateFields();
            const imageURL = imageToUpload ? await handleUploadToFirebase(imageToUpload) : '';

            if (imageToUpload && !imageURL) {
                throw new Error('Failed to upload image.');
            }

            const productData = { ...values, image_url: imageURL };

            const response = await axios.post(BASE_URL + 'Product.php?data=addproduct', productData, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });

            if (response.status === 200 && response.data.success) {
                message.success('Product added successfully');
                form.resetFields();
                handleCloseAddNewProduct();
                fetchProducts();
            } else {
                throw new Error(response.data.message || 'Failed to add product');
            }
        } catch (error) {
            console.error('Error adding product:', error);
            message.error(error.message || 'Failed to add product');
        } finally {
            setLoading(false);
        }
    };

    const handleChanges = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, (imageUrl) => {
                setLoading(false);
                setImageUrl(imageUrl);
                setImageToUpload(info.file.originFileObj);
                form.setFieldsValue({ image_url: imageUrl });
            });
        } else if (info.file.status === 'error') {
            setLoading(false);
            message.error('Failed to upload image.');
        }
    };

    const uploadButton = (
        <div>
            {loading ? <Loading /> : 'Upload'}
        </div>
    );

    return (
        <Modal
            width={800}
            className="h-auto"
            title="Add New Product"
            open={open}
            onCancel={handleCloseAddNewProduct}
            footer={[
                <Button key="cancel" onClick={handleCloseAddNewProduct}>
                    Cancel
                </Button>,
                <Button
                    key="submit"
                    type="primary"
                    className="bg-green"
                    onClick={handleAddProduct}
                    disabled={loading}
                >
                    Save
                </Button>,
            ]}
        >
            <div className="flex mr-80">{loading && <Loading />}</div>
            <Form form={form} layout="vertical">
                <p className="ml-6 text-sm">Image</p>
                <Dragger
                    name="image"
                    listType="picture-card"
                    className="p-6"
                    showUploadList={false}
                    beforeUpload={beforeUpload}
                    customRequest={({ file, onSuccess, onError }) => {
                        handleUploadToFirebase(file)
                            .then((url) => {
                                if (url) {
                                    onSuccess(null, file);
                                } else {
                                    onError(new Error('Failed to upload image.'));
                                }
                            })
                            .catch((error) => onError(error));
                    }}
                    onChange={handleChanges}
                >
                    {imageUrl ? <img src={imageUrl} alt="image" style={{ width: '100%' }} /> : uploadButton}
                </Dragger>
                <div className="flex flex-row justify-center">
                    <Form.Item
                        name="image_url"
                        label="Image URL"
                        rules={[{ required: true, message: 'Please upload an image' }]}
                    >
                        <Input
                            style={{ width: 700, height: 50 }}
                            placeholder="Image URL"
                            value={imageUrl}
                            readOnly
                            disabled
                        />
                    </Form.Item>
                </div>
                <div className="flex flex-row justify-center">
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true, message: 'Please input product name' }]}
                    >
                        <Input
                            style={{ width: 700, height: 50 }}
                            placeholder="Name"
                            onChange={(e) => form.setFieldsValue({ name: e.target.value })}
                        />
                    </Form.Item>
                </div>
                <div className="flex flex-row justify-center">
                    <Form.Item
                        name="description"
                        label="Description"
                        rules={[{ required: true, message: 'Please input product description' }]}
                    >
                        <TextArea
                            style={{ width: 700, height: 100 }}
                            placeholder="Description"
                            onChange={(e) => form.setFieldsValue({ description: e.target.value })}
                        />
                    </Form.Item>
                </div>
                <div className="flex flex-row justify-center">
                    <Form.Item
                        name="price"
                        label="Price"
                        rules={[{ required: true, message: 'Please input product price' }]}
                    >
                        <Input
                            style={{ width: 700, height: 50 }}
                            placeholder="Price"
                            type="number"
                            onChange={(e) => form.setFieldsValue({ price: e.target.value })}
                        />
                    </Form.Item>
                </div>
                <div className="flex flex-row justify-center">
                    <Form.Item
                        name="category_id"
                        label="Category ID"
                        rules={[{ required: true, message: 'Please input category ID' }]}
                    >
                        <Input
                            style={{ width: 700, height: 50 }}
                            placeholder="Category ID"
                            type="number"
                            onChange={(e) => form.setFieldsValue({ category_id: e.target.value })}
                        />
                    </Form.Item>
                </div>
            </Form>
        </Modal>
    );
};

export default AddProduct;
