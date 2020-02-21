const React = require("react-native");
const { StyleSheet } = React;
export default {

    /* ----------------------------------------
		CONTAINERS / CONTENT / BOX / INPUT / FOOTER

	------------------------------------------- */
    // Colors
    blue: '#1075BB',
    grey: '#989A9D',
    green: '#8BC540',

container: {
    flex: 1,
    backgroundColor: '#fff',
},

container_f9f: {
    flex: 1,
    backgroundColor: '#f9f9f9',
},

footer_content: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
},

box_container: {
    //flex:1,
    backgroundColor:'#fff',
    padding:16,
    borderRadius: 4,
    shadowColor:"#000",
    shadowOffset: { width:0, height:2 },
    shadowOpacity: 0.1,
    elevation: 3
},

input_box: {
    marginTop: 10,
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 3,
    borderWidth: .5,
    borderColor: '#c4c4c4',
    backgroundColor: '#f6f6f6',
    borderRadius: 10
    // borderTopLeftRadius: 8,
    // borderTopRightRadius: 8,
},

input_box_E14: {
    marginTop: 10,
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 3,
    borderWidth: .5,
    borderColor: '#E14646',
    backgroundColor: '#fff',
    borderRadius: 10
    // borderTopLeftRadius: 8,
    // borderTopRightRadius: 8,
},

select_box: {
    marginTop: 10,
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#c4c4c4',
    backgroundColor: '#fff',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
},

box_mensaje: {
    backgroundColor: '#EDFBED',
    paddingTop:24,
    paddingBottom: 24,
    paddingLeft: 32,
    paddingRight: 32,
    justifyContent: 'center',
    alignItems: 'center',
},

box_mensaje2: {
    backgroundColor: '#EDFBED',
    paddingTop:16,
    paddingBottom: 16,
    paddingLeft: 24,
    paddingRight: 24,
    justifyContent: 'center',
    alignItems: 'center',
},

box_f1: {
    backgroundColor: '#f1f1f1',
    padding: 16,
},

box_eef: {
    backgroundColor: '#eef4f8',
    padding: 16,
},

box_fff: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#f2f2f2',
    padding: 16,
},

box_notificacion: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    margin:8,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 5,
    shadowColor:"#000",
    shadowOffset: { width:0, height:2 },
    shadowOpacity: 0.5,
    elevation: 3
},

box_notificacion2: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    padding:16,
    borderRadius: 8,
    shadowColor:"#000",
    shadowOffset: { width:0, height:0 },
    shadowOpacity: 0.5,
    elevation: 3,

},

circulo_notificacion: {
    height: 10,
    width: 10,
    /*resizeMode: 'stretch',*/
    borderRadius: 5,
    /*borderColor: '#fff',*/
    borderWidth: 0,
    backgroundColor: '#E14646',
    justifyContent:'center',
    alignItems: 'center',
},

/* -----------------------------
    AVATAR
-------------------------------- */



/* -----------------------------
    MODAL
-------------------------------- */

modal_bottom1: {
    paddingTop: 450,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    margin: 0
},

modalContent: {
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft:24,
    paddingRight:24,
    borderRadius: 2,
    borderColor: "rgba(0, 0, 0, 0.1)",
    shadowColor: '#000',
    elevation: 1,
    shadowOffset: { width: 8, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    flex:1,
},
/* ----------------------------------------
    MARGINS
------------------------------------------- */

    /* all */
    marg_4: { margin:4 },
    marg_8: { margin:8 },
    marg_16: { margin:16 },
    marg_24: { margin: 24 },
    marg_32: { margin: 32 },
    marg_40: { margin: 40 },
    marg_48: { margin: 48 },

    /* top */
    marg_t4: { marginTop:4 },
    marg_t8: { marginTop: 8 },
    marg_t16: { marginTop: 16 },
    marg_t24: { marginTop: 24 },
    marg_t32: { marginTop: 32 },
    marg_t40: { marginTop: 40 },
    marg_t48: { marginTop: 48 },
    marg_t56: { marginTop: 56 },
    marg_t64: { marginTop: 64 },
    marg_t72: { marginTop: 72 },
    marg_t81: { marginTop: 81 },
    marg_t100: { marginTop: 100 },


    /* bottom */
    marg_b8: { marginBottom: 8 },
    marg_b12: { marginBottom: 12 },
    marg_b16: { marginBottom: 16 },
    marg_b24: { marginBottom: 24 },
    marg_b32: { marginBottom: 32 },
    marg_b40: { marginBottom: 40 },
    marg_b48: { marginBottom: 48 },
    marg_b56: { marginBottom: 56 },

    /* left-right */
    marg_lr4: { marginLeft: 4, marginRight: 4 },
    marg_lr8: { marginLeft: 8, marginRight: 8 },
    marg_lr16: { marginLeft: 16, marginRight: 16 },
    marg_lr24: { marginLeft: 24, marginRight: 24 },
    marg_lr32: { marginLeft: 32, marginRight: 32 },
    marg_lr40: { marginLeft: 40, marginRight: 40 },
    marg_lr48: { marginLeft: 48, marginRight: 48 },
    marg_lr56: { marginLeft: 56, marginRight: 56 },

    /* left */
    marg_l2: { marginLeft: 2 },
    marg_l4: { marginLeft: 4 },
    marg_l6: { marginLeft: 6 },
    marg_l8: { marginLeft: 8 },
    marg_l16: { marginLeft: 16 },

    /* right */
    marg_r2: { marginRight: 2 },
    marg_r4: { marginRight: 4 },
    marg_r8: { marginRight: 8 },
    marg_r12: { marginRight: 12 },
    marg_r16: { marginRight: 16 },


/* ----------------------------------------
    PADDINGS
------------------------------------------- */

    /* all */
    pad_4: { padding: 4 },
    pad_8: { padding: 8 },
    pad_16: { padding: 16 },
    pad_24: { padding: 24 },
    pad_32: { padding: 32 },
    pad_40: { padding: 40 },

    /* top */
    pad_t4: { paddingTop: 4 },
    pad_t8: { paddingTop: 8 },
    pad_t12: { paddingTop: 12 },
    pad_t16: { paddingTop: 16 },
    pad_t24: { paddingTop: 24 },
    pad_t32: { paddingTop: 32 },
    pad_t40: { paddingTop: 40 },

    /* bottom */
    pad_b8: { paddingBottom: 8 },
    pad_b16: { paddingBottom: 16 },
    pad_b24: { paddingBottom: 24 },
    pad_b32: { paddingBottom: 32 },
    pad_b40: { paddingBottom: 40 },

    /* left-right */
    pad_lr8: { paddingLeft: 8, paddingRight: 8 },
    pad_lr16: { paddingLeft: 16, paddingRight: 16 },
    pad_lr24: { paddingLeft: 24, paddingRight: 24 },
    pad_lr32: { paddingLeft: 32, paddingRight: 32 },
    pad_lr40: { paddingLeft: 40, paddingRight: 40 },

    /* left */
    pad_l4: { paddingLeft: 4 },
    pad_l8: { paddingLeft: 8 },

    /* top-bottom */
    pad_tb8: { paddingTop: 8, paddingBottom: 8 },
    pad_tb10: { paddingTop: 10, paddingBottom: 10 },
    pad_tb16: { paddingTop: 16, paddingBottom: 16 },


/* ----------------------------------------
    ALIGN CONTENT / ALIGN TEXT
------------------------------------------- */

    flexdir: {
        flexDirection: 'row',
    },

    obj_left: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    obj_posLeftTop: {
        position: 'absolute',
        top: 0,
        right: 0,
    },

    obj_center: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    obj_right: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },

    obj_right2: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    text_left: {
        textAlign: 'left',
    },

    text_center: {
        textAlign: 'center',
    },

    text_right: {
        textAlign: 'right',
    },

    text_inline_left: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    text_inline_center: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    text_inline_right: {
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center'
    },


/* ----------------------------------------
    FONTS / WEIGHT / COLOR / BACKGROUND COLOR
------------------------------------------- */

fw_100: {
    fontFamily: "WorkSans-Thin",
},

fw_200: {
    fontFamily: "WorkSans-ExtraLight",
},

fw_300: {
    fontFamily: "WorkSans-Light",
},

fw_400: {
    fontFamily: "WorkSans-Regular",
},

fw_500: {
    fontFamily: "WorkSans-Medium",
},

fw_600: {
    fontFamily: "WorkSans-SemiBold",
},
fw_700: {
    fontFamily: "WorkSans-Bold",
},

fw_800: {
    fontFamily: "WorkSans-ExtraBold",
},

fw_900: {
    fontFamily: "WorkSans-Black",
},

back_Llamada: {
    backgroundColor: '#FAD691'
},

back_Instalado: {
    backgroundColor: '#66DD96'
},

back_Pendiente: {
    backgroundColor: '#FAB091'
},
back_Rechazado: {
    backgroundColor: '#F9F9F9'
},

back_Nuevo: {
    backgroundColor: '#6A76DF'
},


/* ----------------------------------------
    GROUPS
------------------------------------------- */

tg_1220m: {
    fontFamily: "WorkSans-Medium",
    fontSize: 12,
    lineHeight: 24,
},

tg_1216_363: {
    fontFamily: "WorkSans-Regular",
    fontSize: 12,
    lineHeight: 16,
    color: '#363636',
},

tg_1216_939: {
    fontFamily: "WorkSans-Regular",
    fontSize: 12,
    lineHeight: 16,
    color: '#939393',
},

tg_1416_363: {
    fontFamily: "WorkSans-Regular",
    fontSize: 14,
    lineHeight: 16,
    color: '#363636',
},

tg_1416_939: {
    fontFamily: "WorkSans-Regular",
    fontSize: 14,
    lineHeight: 16,
    color: '#939393',
},

tg_1416: {
    fontFamily: "WorkSans-Regular",
    fontSize: 14,
    lineHeight: 16,
    color: '#000',
},

tg_1416m: {
    fontFamily: "WorkSans-Medium",
    fontSize: 14,
    lineHeight: 16,
    color: '#000',
},

tg_1421m_363: {
    fontFamily: "WorkSans-Medium",
    fontSize: 14,
    lineHeight: 21,
    color: '#363636',
},

tg_1421m_fff: {
    fontFamily: "WorkSans-Medium",
    fontSize: 14,
    lineHeight: 21,
    color: '#fff',
},

tg_1421_2A9: {
    fontFamily: "WorkSans-Regular",
    fontSize: 14,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#2A93DF",
    lineHeight: 21,
    color: '#2A93DF',
},

tg_1421u_939: {
    fontFamily: "WorkSans-Regular",
    fontSize: 14,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#939393",
    lineHeight: 21,
    color: '#939393',
},

tg_1422m_428: {
    fontFamily: "WorkSans-Medium",
    fontSize: 14,
    lineHeight: 24,
    color: '#4288DA',
},

tg_1424u_363: {
    fontFamily: "WorkSans-Bold",
    fontSize: 14,
    lineHeight: 24,
    textTransform: 'uppercase',
    color: '#363636',
},

tg_1424_939: {
    fontFamily: "WorkSans-Regular",
    fontSize: 14,
    lineHeight: 24,
    color: '#939393',
},

tg_1424m_428: {
    fontFamily: "WorkSans-Medium",
    fontSize: 14,
    lineHeight: 24,
    color: '#4288DA',
},

tg_1621m_fff: {
    fontFamily: "WorkSans-Medium",
    fontSize: 16,
    lineHeight: 21,
    color: '#fff',
},

tg_1621m_939: {
    fontFamily: "WorkSans-Medium",
    fontSize: 16,
    lineHeight: 21,
    color: '#939393',
},

tg_1621m_2A9: {
    fontFamily: "WorkSans-Medium",
    fontSize: 16,
    lineHeight: 21,
    color: '#2A93DF',
},

tg_1624r: {
    fontFamily: "WorkSans-Regular",
    fontSize: 16,
    lineHeight: 24,
    color: '#000',
},

tg_1624r_e14: {
    fontFamily: "WorkSans-Regular",
    fontSize: 16,
    lineHeight: 24,
    color: '#E14646',
},

tg_1624r_363: {
    fontFamily: "WorkSans-Regular",
    fontSize: 16,
    lineHeight: 24,
    color: '#363636',
},

tg_1624r_f00: {
    fontFamily: "WorkSans-Regular",
    fontSize: 16,
    lineHeight: 24,
    color: '#f00',
},

tg_1624r_939: {
    fontFamily: "WorkSans-Regular",
    fontSize: 16,
    lineHeight: 24,
    color: '#939393',
},


tg_1624b_939: {
    fontFamily: "WorkSans-Regular",
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
    color: '#000000',
},

tg_1624b_931: {
    fontFamily: "WorkSans-Regular",
    fontSize: 10,
    fontWeight: 'bold',
    lineHeight: 24,
    color: '#000000',
},
tg_1624r_007: {
    fontFamily: "WorkSans-Regular",
    fontSize: 16,
    lineHeight: 24,
    color: '#00750C',
},

tg_1624m_363: {
    fontFamily: "WorkSans-Medium",
    fontSize: 16,
    lineHeight: 24,
    color: '#363636',
},

tg_1624m: {
    fontFamily: "WorkSans-Medium",
    fontSize: 16,
    lineHeight: 24,
    color: '#000',
},

tg_1624m_428: {
    fontFamily: "WorkSans-Medium",
    fontSize: 16,
    lineHeight: 24,
    color: '#4288DA',
},

tg_1627b_363: {
    fontFamily: "WorkSans-SemiBold",
    fontSize: 16,
    lineHeight: 27,
    color: '#363636',
},

tg_1827u: {
    fontFamily: "WorkSans-Bold",
    fontSize: 18,
    lineHeight: 27,
    textTransform: 'uppercase',
    color: '#000',
},

tg_1827u_363: {
    fontFamily: "WorkSans-Bold",
    fontSize: 18,
    lineHeight: 27,
    textTransform: 'uppercase',
    color: '#363636',
},

tg_1827u_939: {
    fontFamily: "WorkSans-Bold",
    fontSize: 18,
    lineHeight: 27,
    textTransform: 'uppercase',
    color: '#939393',
},

tg_1827u_2A9: {
    fontFamily: "WorkSans-Bold",
    fontSize: 18,
    lineHeight: 27,
    textTransform: 'uppercase',
    color: '#2A93DF',
},

tg_2427u_2A9: {
    fontFamily: "WorkSans-Bold",
    fontSize: 24,
    lineHeight: 27,
    textTransform: 'uppercase',
    color: '#2A93DF',
},

textUppercase: {
    textTransform: 'uppercase',
},

textLowercase: {
    textTransform: 'lowercase',
},

input_error: {
    fontFamily: "WorkSans-Regular",
    fontSize: 12,
    lineHeight: 18,
    color: '#E14646',
    paddingLeft: 0,
},


/* ----------------------------------------
    VARIOS
------------------------------------------- */

bordeBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 12,
},

bordeBottom_2A9: {
    borderBottomWidth: 1,
    borderBottomColor: '#2A93DF',
    paddingBottom: 16,
},

bordeBottom2_e9e: {
    borderBottomWidth: 2,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomColor: '#E9EFF3',
},

bordeBottom2_939: {
    borderBottomWidth: 2,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomColor: '#939393',
},

bordeBottom2_2a9: {
    borderBottomWidth: 2,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomColor: '#2A93DF',
},

bordeBottom2_e14: {
    borderBottomWidth: 2,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomColor: '#E14646',
},

botonOn: {
    backgroundColor:'#2A93DF',
    height: 56,
    borderWidth:0,
    borderRadius: 28,
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},

botonOff: {
    backgroundColor:'#E9EFF3',
    height: 56,
    borderWidth:0,
    borderRadius: 28,
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},

botonCancel: {
    backgroundColor:'#f1f1f1',
    height: 56,
    borderWidth:0,
    borderRadius: 28,
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},

botonConBorde: {
    backgroundColor:'#fff',
    height: 56,
    borderWidth:2,
    borderColor: '#2A93DF',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
},

boton_2A9: {
    backgroundColor:'#2A93DF',
    height: 24,
    borderWidth:0,
    borderRadius: 12,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
},

boton_30C: {
    backgroundColor:'#30C16A',
    height: 24,
    borderWidth:0,
    borderRadius: 12,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
},

boton_DF8: {
    backgroundColor:'#DF8D6A',
    height: 24,
    borderWidth:0,
    borderRadius: 12,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
},

boton_SinFondo: {
    backgroundColor: 'transparent',
    height: 56,
    borderWidth:0,
    borderRadius: 28,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},

ocultar: {
    display: 'none',
},

pos_Bottom:{
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
},
/*
pos_BottomRel:{
    position: 'relative',
    left: 0,
    right: 0,
    bottom: 0,
},
*/

pos_FlexBottom:{
    flex:1,
    justifyContent:'flex-end',
    marginBottom:0,
},

    box_mensaje_fail: {
        backgroundColor: '#FBF0ED',
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 32,
        paddingRight: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },

    /* -------------------------------------- */

    tg_1627m_752: {
        fontFamily: "WorkSans-Medium",
        fontSize: 16,
        lineHeight: 27,
        color: '#752A00',
        textTransform: 'uppercase',
    },

    tg_1624r_752: {
        fontFamily: "WorkSans-Regular",
        fontSize: 16,
        lineHeight: 24,
        color: '#752A00',
    },

    image: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#F00',
        marginTop: 100,
    },

    alertBox: {
        flexDirection:'row',
        flex:1,
        margin:10,
        padding:10,
        borderWidth: 0,
        borderColor: 'transparent',
        borderRadius: 4,
        backgroundColor:'rgba(0,0,0,0.8)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 8,
        elevation: 3,
    },

    tg_1012l_fff: {
        fontFamily: "Roboto-Light",
        fontSize: 12,
        lineHeight: 18,
        color: '#fff',
    },

    tg_1220l_999: {
        fontFamily: "Roboto-Light",
        fontSize: 12,
        lineHeight: 20,
        color: '#999',
    },

    tg_1624m_fff: {
        fontFamily: "Roboto-Medium",
        fontSize: 16,
        lineHeight: 24,
        color: '#fff',
    },

}; /* End styles */
