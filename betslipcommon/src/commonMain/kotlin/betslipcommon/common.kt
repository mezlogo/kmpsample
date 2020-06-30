package betslipcommon

import kotlin.js.JsExport

@JsExport
data class ResponseDataClass(val msg: String, val code: Int)

@JsExport
interface Callback { fun onCall(msg: String) : String }

@JsExport
fun commonCode(callback: Callback) = ResponseDataClass(callback.onCall("fromCommon"), 2)