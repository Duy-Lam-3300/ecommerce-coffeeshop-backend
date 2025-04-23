class BaseService {
    constructor(model) {
        this.model = model
    }


    async findAll() {
        return await this.model.find();
    }
    async findById(id) {
        return await this.model.findById(id);
    }

    async create(data) {
        return await this.model.create(data);
    }

    async update(id, data) {
        return await this.model.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return await this.model.delete(id)
    }
}
module.exports = BaseService;