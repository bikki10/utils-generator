const { Model } = require("mongoose");
const contactModel = require("./contact.model");

const create = (payload) => {
    return contactModel.create(payload);
};

const list = () => {
    return contactModel.find();        // Pagination logic is given here
};

const getById = (id) => {
    return contactModel.findOne({_id: id});
};

const update = (id, payload) => {
    return contactModel.updateOne({_id: id}, payload);
};

const remove = (id) => {
    return contactModel.deleteOne({_id: id});
};

module.exports = { create, list, getById, update, remove};