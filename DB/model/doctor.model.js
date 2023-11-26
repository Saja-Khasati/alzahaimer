import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';
import PatientModel from './patient.model.js';

//creat Doctor Model
const DoctorModel = sequelize.define('doctors', {
    doctorName: {
        type: DataTypes.STRING,
        allowNull:false,
        required:true
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique:true,
    }, password: {
        type: DataTypes.STRING(90),
        allowNull:false,
    },
    confirmEmail: {
        type: DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false,
    },
    sendCode:{
        type:DataTypes.STRING,
        defaultValue:null,

    },
},{
    timestamps:false,
});

DoctorModel.hasMany(PatientModel, {
   onDelete:'CASCADE'
});
PatientModel.belongsTo(DoctorModel);


export default DoctorModel;
