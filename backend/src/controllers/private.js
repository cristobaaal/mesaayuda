exports.getPrivateData = (req, res, next) =>{
    res.json({
        success: true,
        data: "tienes acceso a los datos privados en esta ruta",
    });
};