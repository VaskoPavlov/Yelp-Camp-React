import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/camps'

export const getAll = () => request.get(BASE_URL);

export const getById = (campId) => request.get(`${BASE_URL}/${campId}`);

// export const create = async(data, authorId) {
//     //TODO extractproperies from data
//     const record = new Data({
//         prop: data.prop,
//         author: authorId
//     });

//     await record.save();

//     return record;
// }

// export const update = async(id, data, userId) {
//     const record = await Data.findById(id);

//     if (!record) {
//         throw new ReferenceError('Record not found' + id);
//     }

//     if (record.author.toString() != userId) {
//         throw new Error('Access denied');
//     }

//     //TODO replacewith real properties
//     record.prop = data.prop;
//     await record.save();

//     return record;
// }

// export const deleteById = async(id, userId) {
//     const record = await Data.findById(id);

//     if (!record) {
//         throw new ReferenceError('Record not found' + id);
//     }

//     if (record.author.toString() != userId) {
//         throw new Error('Access denied');
//     }

//     await Data.findByIdAndDelete(id);
// }

const campsAPI = {
    getAll,
    getById
}

export default campsAPI