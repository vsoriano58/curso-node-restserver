
const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
});


// sobreescribimos el método toJSON del usuario
// para que no salga el password
UsuarioSchema.methods.toJSON = function() {
    // quitamos los campos __V y password de usuario y al resto le llamamos usuario
    const { __v, password, ...usuario  } = this.toObject();
    return usuario;
}

module.exports = model( 'Usuario', UsuarioSchema );
