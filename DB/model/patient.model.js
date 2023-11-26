import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

const PatientModel = sequelize.define('patients', {
    PatientName: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique:true,
    }, password: {
        type: DataTypes.STRING(90),
       
    }, confirmEmail: {
        type: DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false,
    },age: {
        type: DataTypes.INTEGER,
        
    },gender: {
        type: DataTypes.STRING,
        defaultValue: 'Male',
        enum:['Male','Female'],
    },
    phoneNumber:{
        type:DataTypes.BIGINT,
        allowNull:false,
    }
},{
    timestamps:false,
});


export default PatientModel;
