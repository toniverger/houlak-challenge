import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

export class Searches extends Model { }
Searches.init({
    ip: DataTypes.STRING,
    date: DataTypes.DATE,
    artist: DataTypes.STRING
}, {
    sequelize, modelName: 'searches'
})