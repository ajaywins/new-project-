import express from 'express';
import { any } from 'joi';
import userModel from '../model/userModel';


export default class UserService {
    async createNewUser(user: any) {
        let userInput = user
        try {
            user = new userModel(userInput)
            return user
        } catch (e) {
            console.log(e)
            return (e);
        }
    }
    async getUserByAttribute(attributes: any) {
        let user;
        try {
            user = await userModel.findOne(attributes)
            return user
        } catch (e) {
            console.log(e)
        }
    }
    async getAllDetails() {
        let user;
        try {
            let user = await userModel.find({})
            if (user) {
            }
            return user
        } catch (e) {
            console.log(e)
        }
    }
    async deleteById(id: any) {
        let user;
        try {
            user = await userModel.findByIdAndDelete(id).lean()
            if (user !== null) {
                return user
            }
            else {
                console.log("error")
            }
        } catch (e) {

            return (e);
        }
    }
    async updateById(Id: any, data: any) {
        let user;

        try {
            user = await userModel.findByIdAndUpdate(Id, data)
            console.log(user)
            return user;
        } catch (e) {
            return (e);
        }
    }
}