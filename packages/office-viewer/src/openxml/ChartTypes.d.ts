import { Attributes } from './Attributes';
import { CT_ExtensionList } from './../excel/types/CT_ExtensionList';
export type ST_Lang = string;
export type ST_HexColorRGB = string;
export type ST_Panose = string;
export type ST_CalendarType = 'gregorian' | 'gregorianUs' | 'gregorianMeFrench' | 'gregorianArabic' | 'hijri' | 'hebrew' | 'taiwan' | 'japan' | 'thai' | 'korea' | 'saka' | 'gregorianXlitEnglish' | 'gregorianXlitFrench' | 'none';
export type ST_Guid = string;
export type ST_OnOff = boolean;
export type ST_String = string;
export type ST_XmlName = string;
export type ST_UnsignedDecimalNumber = number;
export type ST_TwipsMeasure = ST_UnsignedDecimalNumber | ST_PositiveUniversalMeasure;
export type ST_VerticalAlignRun = 'baseline' | 'superscript' | 'subscript';
export type ST_Xstring = string;
export type ST_XAlign = 'left' | 'center' | 'right' | 'inside' | 'outside';
export type ST_YAlign = 'inline' | 'top' | 'center' | 'bottom' | 'inside' | 'outside';
export type ST_ConformanceClass = 'strict' | 'transitional';
export type ST_UniversalMeasure = string;
export type ST_PositiveUniversalMeasure = ST_UniversalMeasure;
export type ST_Percentage = string;
export type ST_FixedPercentage = string;
export type ST_PositivePercentage = string;
export type ST_PositiveFixedPercentage = string;
export interface CT_OfficeArtExtension {
    __any__?: any;
    uri?: string;
}
export declare const CT_OfficeArtExtension_Attributes: Attributes;
export interface CT_OfficeArtExtensionList {
    ext?: CT_OfficeArtExtension[];
}
export declare const CT_OfficeArtExtensionList_Attributes: Attributes;
export interface CT_AudioFile {
    extLst?: CT_OfficeArtExtensionList;
    contentType?: string;
}
export declare const CT_AudioFile_Attributes: Attributes;
export interface CT_VideoFile {
    extLst?: CT_OfficeArtExtensionList;
    contentType?: string;
}
export declare const CT_VideoFile_Attributes: Attributes;
export interface CT_QuickTimeFile {
    extLst?: CT_OfficeArtExtensionList;
}
export declare const CT_QuickTimeFile_Attributes: Attributes;
export interface CT_AudioCDTime {
    track?: number;
    time?: number;
}
export declare const CT_AudioCDTime_Attributes: Attributes;
export interface CT_AudioCD {
    st?: CT_AudioCDTime;
    end?: CT_AudioCDTime;
    extLst?: CT_OfficeArtExtensionList;
}
export declare const CT_AudioCD_Attributes: Attributes;
export type ST_StyleMatrixColumnIndex = number;
export type ST_FontCollectionIndex = 'major' | 'minor' | 'none';
export type ST_ColorSchemeIndex = 'dk1' | 'lt1' | 'dk2' | 'lt2' | 'accent1' | 'accent2' | 'accent3' | 'accent4' | 'accent5' | 'accent6' | 'hlink' | 'folHlink';
export interface CT_PositiveFixedPercentage {
    val?: ST_PositiveFixedPercentage;
}
export declare const CT_PositiveFixedPercentage_Attributes: Attributes;
export interface CT_ComplementTransform {
}
export declare const CT_ComplementTransform_Attributes: Attributes;
export interface CT_InverseTransform {
}
export declare const CT_InverseTransform_Attributes: Attributes;
export interface CT_GrayscaleTransform {
}
export declare const CT_GrayscaleTransform_Attributes: Attributes;
export interface CT_FixedPercentage {
    val?: ST_FixedPercentage;
}
export declare const CT_FixedPercentage_Attributes: Attributes;
export interface CT_PositivePercentage {
    val?: ST_PositivePercentage;
}
export declare const CT_PositivePercentage_Attributes: Attributes;
export type ST_PositiveFixedAngle = ST_Angle;
export interface CT_PositiveFixedAngle {
    val?: number;
}
export declare const CT_PositiveFixedAngle_Attributes: Attributes;
export type ST_Angle = number;
export interface CT_Angle {
    val?: number;
}
export declare const CT_Angle_Attributes: Attributes;
export interface CT_Percentage {
    val?: string;
}
export declare const CT_Percentage_Attributes: Attributes;
export interface CT_GammaTransform {
}
export declare const CT_GammaTransform_Attributes: Attributes;
export interface CT_InverseGammaTransform {
}
export declare const CT_InverseGammaTransform_Attributes: Attributes;
export interface CT_ScRgbColor {
    tint?: CT_PositiveFixedPercentage;
    shade?: CT_PositiveFixedPercentage;
    comp?: CT_ComplementTransform;
    inv?: CT_InverseTransform;
    gray?: CT_GrayscaleTransform;
    alpha?: CT_PositiveFixedPercentage;
    alphaOff?: CT_FixedPercentage;
    alphaMod?: CT_PositivePercentage;
    hue?: CT_PositiveFixedAngle;
    hueOff?: CT_Angle;
    hueMod?: CT_PositivePercentage;
    sat?: CT_Percentage;
    satOff?: CT_Percentage;
    satMod?: CT_Percentage;
    lum?: CT_Percentage;
    lumOff?: CT_Percentage;
    lumMod?: CT_Percentage;
    red?: CT_Percentage;
    redOff?: CT_Percentage;
    redMod?: CT_Percentage;
    green?: CT_Percentage;
    greenOff?: CT_Percentage;
    greenMod?: CT_Percentage;
    blue?: CT_Percentage;
    blueOff?: CT_Percentage;
    blueMod?: CT_Percentage;
    gamma?: CT_GammaTransform;
    invGamma?: CT_InverseGammaTransform;
    r?: string;
    g?: string;
    b?: string;
}
export declare const CT_ScRgbColor_Attributes: Attributes;
export interface CT_SRgbColor {
    tint?: CT_PositiveFixedPercentage;
    shade?: CT_PositiveFixedPercentage;
    comp?: CT_ComplementTransform;
    inv?: CT_InverseTransform;
    gray?: CT_GrayscaleTransform;
    alpha?: CT_PositiveFixedPercentage;
    alphaOff?: CT_FixedPercentage;
    alphaMod?: CT_PositivePercentage;
    hue?: CT_PositiveFixedAngle;
    hueOff?: CT_Angle;
    hueMod?: CT_PositivePercentage;
    sat?: CT_Percentage;
    satOff?: CT_Percentage;
    satMod?: CT_Percentage;
    lum?: CT_Percentage;
    lumOff?: CT_Percentage;
    lumMod?: CT_Percentage;
    red?: CT_Percentage;
    redOff?: CT_Percentage;
    redMod?: CT_Percentage;
    green?: CT_Percentage;
    greenOff?: CT_Percentage;
    greenMod?: CT_Percentage;
    blue?: CT_Percentage;
    blueOff?: CT_Percentage;
    blueMod?: CT_Percentage;
    gamma?: CT_GammaTransform;
    invGamma?: CT_InverseGammaTransform;
    val?: string;
}
export declare const CT_SRgbColor_Attributes: Attributes;
export interface CT_HslColor {
    tint?: CT_PositiveFixedPercentage;
    shade?: CT_PositiveFixedPercentage;
    comp?: CT_ComplementTransform;
    inv?: CT_InverseTransform;
    gray?: CT_GrayscaleTransform;
    alpha?: CT_PositiveFixedPercentage;
    alphaOff?: CT_FixedPercentage;
    alphaMod?: CT_PositivePercentage;
    hue?: number;
    hueOff?: CT_Angle;
    hueMod?: CT_PositivePercentage;
    sat?: string;
    satOff?: CT_Percentage;
    satMod?: CT_Percentage;
    lum?: string;
    lumOff?: CT_Percentage;
    lumMod?: CT_Percentage;
    red?: CT_Percentage;
    redOff?: CT_Percentage;
    redMod?: CT_Percentage;
    green?: CT_Percentage;
    greenOff?: CT_Percentage;
    greenMod?: CT_Percentage;
    blue?: CT_Percentage;
    blueOff?: CT_Percentage;
    blueMod?: CT_Percentage;
    gamma?: CT_GammaTransform;
    invGamma?: CT_InverseGammaTransform;
}
export declare const CT_HslColor_Attributes: Attributes;
export type ST_SystemColorVal = 'scrollBar' | 'background' | 'activeCaption' | 'inactiveCaption' | 'menu' | 'window' | 'windowFrame' | 'menuText' | 'windowText' | 'captionText' | 'activeBorder' | 'inactiveBorder' | 'appWorkspace' | 'highlight' | 'highlightText' | 'btnFace' | 'btnShadow' | 'grayText' | 'btnText' | 'inactiveCaptionText' | 'btnHighlight' | '3dDkShadow' | '3dLight' | 'infoText' | 'infoBk' | 'hotLight' | 'gradientActiveCaption' | 'gradientInactiveCaption' | 'menuHighlight' | 'menuBar';
export interface CT_SystemColor {
    tint?: CT_PositiveFixedPercentage;
    shade?: CT_PositiveFixedPercentage;
    comp?: CT_ComplementTransform;
    inv?: CT_InverseTransform;
    gray?: CT_GrayscaleTransform;
    alpha?: CT_PositiveFixedPercentage;
    alphaOff?: CT_FixedPercentage;
    alphaMod?: CT_PositivePercentage;
    hue?: CT_PositiveFixedAngle;
    hueOff?: CT_Angle;
    hueMod?: CT_PositivePercentage;
    sat?: CT_Percentage;
    satOff?: CT_Percentage;
    satMod?: CT_Percentage;
    lum?: CT_Percentage;
    lumOff?: CT_Percentage;
    lumMod?: CT_Percentage;
    red?: CT_Percentage;
    redOff?: CT_Percentage;
    redMod?: CT_Percentage;
    green?: CT_Percentage;
    greenOff?: CT_Percentage;
    greenMod?: CT_Percentage;
    blue?: CT_Percentage;
    blueOff?: CT_Percentage;
    blueMod?: CT_Percentage;
    gamma?: CT_GammaTransform;
    invGamma?: CT_InverseGammaTransform;
    val?: ST_SystemColorVal;
    lastClr?: string;
}
export declare const CT_SystemColor_Attributes: Attributes;
export type ST_SchemeColorVal = 'bg1' | 'tx1' | 'bg2' | 'tx2' | 'accent1' | 'accent2' | 'accent3' | 'accent4' | 'accent5' | 'accent6' | 'hlink' | 'folHlink' | 'phClr' | 'dk1' | 'lt1' | 'dk2' | 'lt2';
export interface CT_SchemeColor {
    tint?: CT_PositiveFixedPercentage;
    shade?: CT_PositiveFixedPercentage;
    comp?: CT_ComplementTransform;
    inv?: CT_InverseTransform;
    gray?: CT_GrayscaleTransform;
    alpha?: CT_PositiveFixedPercentage;
    alphaOff?: CT_FixedPercentage;
    alphaMod?: CT_PositivePercentage;
    hue?: CT_PositiveFixedAngle;
    hueOff?: CT_Angle;
    hueMod?: CT_PositivePercentage;
    sat?: CT_Percentage;
    satOff?: CT_Percentage;
    satMod?: CT_Percentage;
    lum?: CT_Percentage;
    lumOff?: CT_Percentage;
    lumMod?: CT_Percentage;
    red?: CT_Percentage;
    redOff?: CT_Percentage;
    redMod?: CT_Percentage;
    green?: CT_Percentage;
    greenOff?: CT_Percentage;
    greenMod?: CT_Percentage;
    blue?: CT_Percentage;
    blueOff?: CT_Percentage;
    blueMod?: CT_Percentage;
    gamma?: CT_GammaTransform;
    invGamma?: CT_InverseGammaTransform;
    val?: ST_SchemeColorVal;
}
export declare const CT_SchemeColor_Attributes: Attributes;
export type ST_PresetColorVal = 'aliceBlue' | 'antiqueWhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'black' | 'blanchedAlmond' | 'blue' | 'blueViolet' | 'brown' | 'burlyWood' | 'cadetBlue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerBlue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkBlue' | 'darkCyan' | 'darkGoldenrod' | 'darkGray' | 'darkGrey' | 'darkGreen' | 'darkKhaki' | 'darkMagenta' | 'darkOliveGreen' | 'darkOrange' | 'darkOrchid' | 'darkRed' | 'darkSalmon' | 'darkSeaGreen' | 'darkSlateBlue' | 'darkSlateGray' | 'darkSlateGrey' | 'darkTurquoise' | 'darkViolet' | 'dkBlue' | 'dkCyan' | 'dkGoldenrod' | 'dkGray' | 'dkGrey' | 'dkGreen' | 'dkKhaki' | 'dkMagenta' | 'dkOliveGreen' | 'dkOrange' | 'dkOrchid' | 'dkRed' | 'dkSalmon' | 'dkSeaGreen' | 'dkSlateBlue' | 'dkSlateGray' | 'dkSlateGrey' | 'dkTurquoise' | 'dkViolet' | 'deepPink' | 'deepSkyBlue' | 'dimGray' | 'dimGrey' | 'dodgerBlue' | 'firebrick' | 'floralWhite' | 'forestGreen' | 'fuchsia' | 'gainsboro' | 'ghostWhite' | 'gold' | 'goldenrod' | 'gray' | 'grey' | 'green' | 'greenYellow' | 'honeydew' | 'hotPink' | 'indianRed' | 'indigo' | 'ivory' | 'khaki' | 'lavender' | 'lavenderBlush' | 'lawnGreen' | 'lemonChiffon' | 'lightBlue' | 'lightCoral' | 'lightCyan' | 'lightGoldenrodYellow' | 'lightGray' | 'lightGrey' | 'lightGreen' | 'lightPink' | 'lightSalmon' | 'lightSeaGreen' | 'lightSkyBlue' | 'lightSlateGray' | 'lightSlateGrey' | 'lightSteelBlue' | 'lightYellow' | 'ltBlue' | 'ltCoral' | 'ltCyan' | 'ltGoldenrodYellow' | 'ltGray' | 'ltGrey' | 'ltGreen' | 'ltPink' | 'ltSalmon' | 'ltSeaGreen' | 'ltSkyBlue' | 'ltSlateGray' | 'ltSlateGrey' | 'ltSteelBlue' | 'ltYellow' | 'lime' | 'limeGreen' | 'linen' | 'magenta' | 'maroon' | 'medAquamarine' | 'medBlue' | 'medOrchid' | 'medPurple' | 'medSeaGreen' | 'medSlateBlue' | 'medSpringGreen' | 'medTurquoise' | 'medVioletRed' | 'mediumAquamarine' | 'mediumBlue' | 'mediumOrchid' | 'mediumPurple' | 'mediumSeaGreen' | 'mediumSlateBlue' | 'mediumSpringGreen' | 'mediumTurquoise' | 'mediumVioletRed' | 'midnightBlue' | 'mintCream' | 'mistyRose' | 'moccasin' | 'navajoWhite' | 'navy' | 'oldLace' | 'olive' | 'oliveDrab' | 'orange' | 'orangeRed' | 'orchid' | 'paleGoldenrod' | 'paleGreen' | 'paleTurquoise' | 'paleVioletRed' | 'papayaWhip' | 'peachPuff' | 'peru' | 'pink' | 'plum' | 'powderBlue' | 'purple' | 'red' | 'rosyBrown' | 'royalBlue' | 'saddleBrown' | 'salmon' | 'sandyBrown' | 'seaGreen' | 'seaShell' | 'sienna' | 'silver' | 'skyBlue' | 'slateBlue' | 'slateGray' | 'slateGrey' | 'snow' | 'springGreen' | 'steelBlue' | 'tan' | 'teal' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whiteSmoke' | 'yellow' | 'yellowGreen';
export interface CT_PresetColor {
    tint?: CT_PositiveFixedPercentage;
    shade?: CT_PositiveFixedPercentage;
    comp?: CT_ComplementTransform;
    inv?: CT_InverseTransform;
    gray?: CT_GrayscaleTransform;
    alpha?: CT_PositiveFixedPercentage;
    alphaOff?: CT_FixedPercentage;
    alphaMod?: CT_PositivePercentage;
    hue?: CT_PositiveFixedAngle;
    hueOff?: CT_Angle;
    hueMod?: CT_PositivePercentage;
    sat?: CT_Percentage;
    satOff?: CT_Percentage;
    satMod?: CT_Percentage;
    lum?: CT_Percentage;
    lumOff?: CT_Percentage;
    lumMod?: CT_Percentage;
    red?: CT_Percentage;
    redOff?: CT_Percentage;
    redMod?: CT_Percentage;
    green?: CT_Percentage;
    greenOff?: CT_Percentage;
    greenMod?: CT_Percentage;
    blue?: CT_Percentage;
    blueOff?: CT_Percentage;
    blueMod?: CT_Percentage;
    gamma?: CT_GammaTransform;
    invGamma?: CT_InverseGammaTransform;
    val?: ST_PresetColorVal;
}
export declare const CT_PresetColor_Attributes: Attributes;
export interface CT_Color {
    scrgbClr?: CT_ScRgbColor;
    srgbClr?: CT_SRgbColor;
    hslClr?: CT_HslColor;
    sysClr?: CT_SystemColor;
    schemeClr?: CT_SchemeColor;
    prstClr?: CT_PresetColor;
}
export declare const CT_Color_Attributes: Attributes;
export interface CT_ColorScheme {
    dk1?: CT_Color;
    lt1?: CT_Color;
    dk2?: CT_Color;
    lt2?: CT_Color;
    accent1?: CT_Color;
    accent2?: CT_Color;
    accent3?: CT_Color;
    accent4?: CT_Color;
    accent5?: CT_Color;
    accent6?: CT_Color;
    hlink?: CT_Color;
    folHlink?: CT_Color;
    extLst?: CT_OfficeArtExtensionList;
    name?: string;
}
export declare const CT_ColorScheme_Attributes: Attributes;
export interface CT_CustomColor {
    scrgbClr?: CT_ScRgbColor;
    srgbClr?: CT_SRgbColor;
    hslClr?: CT_HslColor;
    sysClr?: CT_SystemColor;
    schemeClr?: CT_SchemeColor;
    prstClr?: CT_PresetColor;
    name?: string;
}
export declare const CT_CustomColor_Attributes: Attributes;
export type ST_TextTypeface = string;
export interface CT_SupplementalFont {
    script?: string;
    typeface?: string;
}
export declare const CT_SupplementalFont_Attributes: Attributes;
export interface CT_CustomColorList {
    custClr?: CT_CustomColor[];
}
export declare const CT_CustomColorList_Attributes: Attributes;
export type ST_PitchFamily = number;
export interface CT_TextFont {
    typeface?: string;
    panose?: string;
    pitchFamily?: number;
    charset?: number;
}
export declare const CT_TextFont_Attributes: Attributes;
export interface CT_FontCollection {
    latin?: CT_TextFont;
    ea?: CT_TextFont;
    cs?: CT_TextFont;
    font?: CT_SupplementalFont[];
    extLst?: CT_OfficeArtExtensionList;
}
export declare const CT_FontCollection_Attributes: Attributes;
export type CT_EffectStyleItem = any;
export declare const CT_EffectStyleItem_Attributes: Attributes;
export type CT_EffectList = any;
export declare const CT_EffectList_Attributes: Attributes;
export type ST_PositiveCoordinate = number;
export interface CT_BlurEffect {
    rad?: number;
    grow?: boolean;
}
export declare const CT_BlurEffect_Attributes: Attributes;
export type CT_FillOverlayEffect = any;
export declare const CT_FillOverlayEffect_Attributes: Attributes;
export interface CT_NoFillProperties {
}
export declare const CT_NoFillProperties_Attributes: Attributes;
export interface CT_SolidColorFillProperties {
    scrgbClr?: CT_ScRgbColor;
    srgbClr?: CT_SRgbColor;
    hslClr?: CT_HslColor;
    sysClr?: CT_SystemColor;
    schemeClr?: CT_SchemeColor;
    prstClr?: CT_PresetColor;
}
export declare const CT_SolidColorFillProperties_Attributes: Attributes;
export interface CT_GradientStop {
    scrgbClr?: CT_ScRgbColor;
    srgbClr?: CT_SRgbColor;
    hslClr?: CT_HslColor;
    sysClr?: CT_SystemColor;
    schemeClr?: CT_SchemeColor;
    prstClr?: CT_PresetColor;
    pos?: ST_PositiveFixedPercentage;
}
export declare const CT_GradientStop_Attributes: Attributes;
export interface CT_GradientStopList {
    gs?: CT_GradientStop[];
}
export declare const CT_GradientStopList_Attributes: Attributes;
export interface CT_LinearShadeProperties {
    ang?: number;
    scaled?: boolean;
}
export declare const CT_LinearShadeProperties_Attributes: Attributes;
export interface CT_RelativeRect {
    l?: string;
    t?: string;
    r?: string;
    b?: string;
}
export declare const CT_RelativeRect_Attributes: Attributes;
export type ST_PathShadeType = 'shape' | 'circle' | 'rect';
export interface CT_PathShadeProperties {
    fillToRect?: CT_RelativeRect;
    path?: ST_PathShadeType;
}
export declare const CT_PathShadeProperties_Attributes: Attributes;
export type ST_TileFlipMode = 'none' | 'x' | 'y' | 'xy';
export interface CT_GradientFillProperties {
    gsLst?: CT_GradientStopList;
    lin?: CT_LinearShadeProperties;
    path?: CT_PathShadeProperties;
    tileRect?: CT_RelativeRect;
    flip?: ST_TileFlipMode;
    rotWithShape?: boolean;
}
export declare const CT_GradientFillProperties_Attributes: Attributes;
export type CT_BlipFillProperties = any;
export declare const CT_BlipFillProperties_Attributes: Attributes;
export interface CT_AlphaBiLevelEffect {
    thresh?: ST_PositiveFixedPercentage;
}
export declare const CT_AlphaBiLevelEffect_Attributes: Attributes;
export interface CT_AlphaCeilingEffect {
}
export declare const CT_AlphaCeilingEffect_Attributes: Attributes;
export interface CT_AlphaFloorEffect {
}
export declare const CT_AlphaFloorEffect_Attributes: Attributes;
export interface CT_AlphaInverseEffect {
    scrgbClr?: CT_ScRgbColor;
    srgbClr?: CT_SRgbColor;
    hslClr?: CT_HslColor;
    sysClr?: CT_SystemColor;
    schemeClr?: CT_SchemeColor;
    prstClr?: CT_PresetColor;
}
export declare const CT_AlphaInverseEffect_Attributes: Attributes;
export type ST_EffectContainerType = 'sib' | 'tree';
export interface CT_EffectContainer {
    type?: ST_EffectContainerType;
    name?: string;
}
export declare const CT_EffectContainer_Attributes: Attributes;
export interface CT_AlphaModulateEffect {
    cont?: CT_EffectContainer;
}
export declare const CT_AlphaModulateEffect_Attributes: Attributes;
export interface CT_AlphaModulateFixedEffect {
    amt?: ST_PositivePercentage;
}
export declare const CT_AlphaModulateFixedEffect_Attributes: Attributes;
export interface CT_AlphaReplaceEffect {
    a?: ST_PositiveFixedPercentage;
}
export declare const CT_AlphaReplaceEffect_Attributes: Attributes;
export interface CT_BiLevelEffect {
    thresh?: ST_PositiveFixedPercentage;
}
export declare const CT_BiLevelEffect_Attributes: Attributes;
export interface CT_ColorChangeEffect {
    clrFrom?: CT_Color;
    clrTo?: CT_Color;
    useA?: boolean;
}
export declare const CT_ColorChangeEffect_Attributes: Attributes;
export interface CT_ColorReplaceEffect {
    scrgbClr?: CT_ScRgbColor;
    srgbClr?: CT_SRgbColor;
    hslClr?: CT_HslColor;
    sysClr?: CT_SystemColor;
    schemeClr?: CT_SchemeColor;
    prstClr?: CT_PresetColor;
}
export declare const CT_ColorReplaceEffect_Attributes: Attributes;
export interface CT_DuotoneEffect {
    scrgbClr?: CT_ScRgbColor;
    srgbClr?: CT_SRgbColor;
    hslClr?: CT_HslColor;
    sysClr?: CT_SystemColor;
    schemeClr?: CT_SchemeColor;
    prstClr?: CT_PresetColor;
}
export declare const CT_DuotoneEffect_Attributes: Attributes;
export interface CT_GrayscaleEffect {
}
export declare const CT_GrayscaleEffect_Attributes: Attributes;
export interface CT_HSLEffect {
    hue?: number;
    sat?: ST_FixedPercentage;
    lum?: ST_FixedPercentage;
}
export declare const CT_HSLEffect_Attributes: Attributes;
export interface CT_LuminanceEffect {
    bright?: ST_FixedPercentage;
    contrast?: ST_FixedPercentage;
}
export declare const CT_LuminanceEffect_Attributes: Attributes;
export interface CT_TintEffect {
    hue?: number;
    amt?: ST_FixedPercentage;
}
export declare const CT_TintEffect_Attributes: Attributes;
export type ST_BlipCompression = 'email' | 'screen' | 'print' | 'hqprint' | 'none';
export interface CT_Blip {
    alphaBiLevel?: CT_AlphaBiLevelEffect;
    alphaCeiling?: CT_AlphaCeilingEffect;
    alphaFloor?: CT_AlphaFloorEffect;
    alphaInv?: CT_AlphaInverseEffect;
    alphaMod?: CT_AlphaModulateEffect;
    alphaModFix?: CT_AlphaModulateFixedEffect;
    alphaRepl?: CT_AlphaReplaceEffect;
    biLevel?: CT_BiLevelEffect;
    blur?: CT_BlurEffect;
    clrChange?: CT_ColorChangeEffect;
    clrRepl?: CT_ColorReplaceEffect;
    duotone?: CT_DuotoneEffect;
    fillOverlay?: CT_FillOverlayEffect;
    grayscl?: CT_GrayscaleEffect;
    hsl?: CT_HSLEffect;
    lum?: CT_LuminanceEffect;
    tint?: CT_TintEffect;
    extLst?: CT_OfficeArtExtensionList;
    cstate?: ST_BlipCompression;
}
export declare const CT_Blip_Attributes: Attributes;
export type ST_Coordinate = ST_CoordinateUnqualified | ST_UniversalMeasure;
export type ST_RectAlignment = 'tl' | 't' | 'tr' | 'l' | 'ctr' | 'r' | 'bl' | 'b' | 'br';
export interface CT_TileInfoProperties {
    tx?: ST_Coordinate;
    ty?: ST_Coordinate;
    sx?: string;
    sy?: string;
    flip?: ST_TileFlipMode;
    algn?: ST_RectAlignment;
}
export declare const CT_TileInfoProperties_Attributes: Attributes;
export interface CT_StretchInfoProperties {
    fillRect?: CT_RelativeRect;
}
export declare const CT_StretchInfoProperties_Attributes: Attributes;
export type ST_PresetPatternVal = 'pct5' | 'pct10' | 'pct20' | 'pct25' | 'pct30' | 'pct40' | 'pct50' | 'pct60' | 'pct70' | 'pct75' | 'pct80' | 'pct90' | 'horz' | 'vert' | 'ltHorz' | 'ltVert' | 'dkHorz' | 'dkVert' | 'narHorz' | 'narVert' | 'dashHorz' | 'dashVert' | 'cross' | 'dnDiag' | 'upDiag' | 'ltDnDiag' | 'ltUpDiag' | 'dkDnDiag' | 'dkUpDiag' | 'wdDnDiag' | 'wdUpDiag' | 'dashDnDiag' | 'dashUpDiag' | 'diagCross' | 'smCheck' | 'lgCheck' | 'smGrid' | 'lgGrid' | 'dotGrid' | 'smConfetti' | 'lgConfetti' | 'horzBrick' | 'diagBrick' | 'solidDmnd' | 'openDmnd' | 'dotDmnd' | 'plaid' | 'sphere' | 'weave' | 'divot' | 'shingle' | 'wave' | 'trellis' | 'zigZag';
export interface CT_PatternFillProperties {
    fgClr?: CT_Color;
    bgClr?: CT_Color;
    prst?: ST_PresetPatternVal;
}
export declare const CT_PatternFillProperties_Attributes: Attributes;
export interface CT_GroupFillProperties {
}
export declare const CT_GroupFillProperties_Attributes: Attributes;
export type ST_BlendMode = 'over' | 'mult' | 'screen' | 'darken' | 'lighten';
export interface CT_GlowEffect {
    scrgbClr?: CT_ScRgbColor;
    srgbClr?: CT_SRgbColor;
    hslClr?: CT_HslColor;
    sysClr?: CT_SystemColor;
    schemeClr?: CT_SchemeColor;
    prstClr?: CT_PresetColor;
    rad?: number;
}
export declare const CT_GlowEffect_Attributes: Attributes;
export interface CT_InnerShadowEffect {
    scrgbClr?: CT_ScRgbColor;
    srgbClr?: CT_SRgbColor;
    hslClr?: CT_HslColor;
    sysClr?: CT_SystemColor;
    schemeClr?: CT_SchemeColor;
    prstClr?: CT_PresetColor;
    blurRad?: number;
    dist?: number;
    dir?: number;
}
export declare const CT_InnerShadowEffect_Attributes: Attributes;
export type ST_FixedAngle = ST_Angle;
export interface CT_OuterShadowEffect {
    scrgbClr?: CT_ScRgbColor;
    srgbClr?: CT_SRgbColor;
    hslClr?: CT_HslColor;
    sysClr?: CT_SystemColor;
    schemeClr?: CT_SchemeColor;
    prstClr?: CT_PresetColor;
    blurRad?: number;
    dist?: number;
    dir?: number;
    sx?: string;
    sy?: string;
    kx?: number;
    ky?: number;
    algn?: ST_RectAlignment;
    rotWithShape?: boolean;
}
export declare const CT_OuterShadowEffect_Attributes: Attributes;
export type ST_PresetShadowVal = 'shdw1' | 'shdw2' | 'shdw3' | 'shdw4' | 'shdw5' | 'shdw6' | 'shdw7' | 'shdw8' | 'shdw9' | 'shdw10' | 'shdw11' | 'shdw12' | 'shdw13' | 'shdw14' | 'shdw15' | 'shdw16' | 'shdw17' | 'shdw18' | 'shdw19' | 'shdw20';
export interface CT_PresetShadowEffect {
    scrgbClr?: CT_ScRgbColor;
    srgbClr?: CT_SRgbColor;
    hslClr?: CT_HslColor;
    sysClr?: CT_SystemColor;
    schemeClr?: CT_SchemeColor;
    prstClr?: CT_PresetColor;
    prst?: ST_PresetShadowVal;
    dist?: number;
    dir?: number;
}
export declare const CT_PresetShadowEffect_Attributes: Attributes;
export interface CT_ReflectionEffect {
    blurRad?: number;
    stA?: ST_PositiveFixedPercentage;
    stPos?: ST_PositiveFixedPercentage;
    endA?: ST_PositiveFixedPercentage;
    endPos?: ST_PositiveFixedPercentage;
    dist?: number;
    dir?: number;
    fadeDir?: number;
    sx?: string;
    sy?: string;
    kx?: number;
    ky?: number;
    algn?: ST_RectAlignment;
    rotWithShape?: boolean;
}
export declare const CT_ReflectionEffect_Attributes: Attributes;
export interface CT_SoftEdgesEffect {
    rad?: number;
}
export declare const CT_SoftEdgesEffect_Attributes: Attributes;
export interface CT_SphereCoords {
    lat?: number;
    lon?: number;
    rev?: number;
}
export declare const CT_SphereCoords_Attributes: Attributes;
export type ST_PresetCameraType = 'legacyObliqueTopLeft' | 'legacyObliqueTop' | 'legacyObliqueTopRight' | 'legacyObliqueLeft' | 'legacyObliqueFront' | 'legacyObliqueRight' | 'legacyObliqueBottomLeft' | 'legacyObliqueBottom' | 'legacyObliqueBottomRight' | 'legacyPerspectiveTopLeft' | 'legacyPerspectiveTop' | 'legacyPerspectiveTopRight' | 'legacyPerspectiveLeft' | 'legacyPerspectiveFront' | 'legacyPerspectiveRight' | 'legacyPerspectiveBottomLeft' | 'legacyPerspectiveBottom' | 'legacyPerspectiveBottomRight' | 'orthographicFront' | 'isometricTopUp' | 'isometricTopDown' | 'isometricBottomUp' | 'isometricBottomDown' | 'isometricLeftUp' | 'isometricLeftDown' | 'isometricRightUp' | 'isometricRightDown' | 'isometricOffAxis1Left' | 'isometricOffAxis1Right' | 'isometricOffAxis1Top' | 'isometricOffAxis2Left' | 'isometricOffAxis2Right' | 'isometricOffAxis2Top' | 'isometricOffAxis3Left' | 'isometricOffAxis3Right' | 'isometricOffAxis3Bottom' | 'isometricOffAxis4Left' | 'isometricOffAxis4Right' | 'isometricOffAxis4Bottom' | 'obliqueTopLeft' | 'obliqueTop' | 'obliqueTopRight' | 'obliqueLeft' | 'obliqueRight' | 'obliqueBottomLeft' | 'obliqueBottom' | 'obliqueBottomRight' | 'perspectiveFront' | 'perspectiveLeft' | 'perspectiveRight' | 'perspectiveAbove' | 'perspectiveBelow' | 'perspectiveAboveLeftFacing' | 'perspectiveAboveRightFacing' | 'perspectiveContrastingLeftFacing' | 'perspectiveContrastingRightFacing' | 'perspectiveHeroicLeftFacing' | 'perspectiveHeroicRightFacing' | 'perspectiveHeroicExtremeLeftFacing' | 'perspectiveHeroicExtremeRightFacing' | 'perspectiveRelaxed' | 'perspectiveRelaxedModerately';
export type ST_FOVAngle = ST_Angle;
export interface CT_Camera {
    rot?: CT_SphereCoords;
    prst?: ST_PresetCameraType;
    fov?: number;
    zoom?: ST_PositivePercentage;
}
export declare const CT_Camera_Attributes: Attributes;
export type ST_LightRigType = 'legacyFlat1' | 'legacyFlat2' | 'legacyFlat3' | 'legacyFlat4' | 'legacyNormal1' | 'legacyNormal2' | 'legacyNormal3' | 'legacyNormal4' | 'legacyHarsh1' | 'legacyHarsh2' | 'legacyHarsh3' | 'legacyHarsh4' | 'threePt' | 'balanced' | 'soft' | 'harsh' | 'flood' | 'contrasting' | 'morning' | 'sunrise' | 'sunset' | 'chilly' | 'freezing' | 'flat' | 'twoPt' | 'glow' | 'brightRoom';
export type ST_LightRigDirection = 'tl' | 't' | 'tr' | 'l' | 'r' | 'bl' | 'b' | 'br';
export interface CT_LightRig {
    rot?: CT_SphereCoords;
    rig?: ST_LightRigType;
    dir?: ST_LightRigDirection;
}
export declare const CT_LightRig_Attributes: Attributes;
export interface CT_Point3D {
    x?: ST_Coordinate;
    y?: ST_Coordinate;
    z?: ST_Coordinate;
}
export declare const CT_Point3D_Attributes: Attributes;
export interface CT_Vector3D {
    dx?: ST_Coordinate;
    dy?: ST_Coordinate;
    dz?: ST_Coordinate;
}
export declare const CT_Vector3D_Attributes: Attributes;
export interface CT_Backdrop {
    anchor?: CT_Point3D;
    norm?: CT_Vector3D;
    up?: CT_Vector3D;
    extLst?: CT_OfficeArtExtensionList;
}
export declare const CT_Backdrop_Attributes: Attributes;
export interface CT_Scene3D {
    camera?: CT_Camera;
    lightRig?: CT_LightRig;
    backdrop?: CT_Backdrop;
    extLst?: CT_OfficeArtExtensionList;
}
export declare const CT_Scene3D_Attributes: Attributes;
export type ST_BevelPresetType = 'relaxedInset' | 'circle' | 'slope' | 'cross' | 'angle' | 'softRound' | 'convex' | 'coolSlant' | 'divot' | 'riblet' | 'hardEdge' | 'artDeco';
export interface CT_Bevel {
    w?: number;
    h?: number;
    prst?: ST_BevelPresetType;
}
export declare const CT_Bevel_Attributes: Attributes;
export type ST_PresetMaterialType = 'legacyMatte' | 'legacyPlastic' | 'legacyMetal' | 'legacyWireframe' | 'matte' | 'plastic' | 'metal' | 'warmMatte' | 'translucentPowder' | 'powder' | 'dkEdge' | 'softEdge' | 'clear' | 'flat' | 'softmetal';
export interface CT_Shape3D {
    bevelT?: CT_Bevel;
    bevelB?: CT_Bevel;
    extrusionClr?: CT_Color;
    contourClr?: CT_Color;
    extLst?: CT_OfficeArtExtensionList;
    z?: ST_Coordinate;
    extrusionH?: number;
    contourW?: number;
    prstMaterial?: ST_PresetMaterialType;
}
export declare const CT_Shape3D_Attributes: Attributes;
export interface CT_FontScheme {
    majorFont?: CT_FontCollection;
    minorFont?: CT_FontCollection;
    extLst?: CT_OfficeArtExtensionList;
    name?: string;
}
export declare const CT_FontScheme_Attributes: Attributes;
export interface CT_FillStyleList {
    noFill?: CT_NoFillProperties;
    solidFill?: CT_SolidColorFillProperties;
    gradFill?: CT_GradientFillProperties;
    blipFill?: CT_BlipFillProperties;
    pattFill?: CT_PatternFillProperties;
    grpFill?: CT_GroupFillProperties;
}
export declare const CT_FillStyleList_Attributes: Attributes;
export type ST_PresetLineDashVal = 'solid' | 'dot' | 'dash' | 'lgDash' | 'dashDot' | 'lgDashDot' | 'lgDashDotDot' | 'sysDash' | 'sysDot' | 'sysDashDot' | 'sysDashDotDot';
export interface CT_PresetLineDashProperties {
    val?: ST_PresetLineDashVal;
}
export declare const CT_PresetLineDashProperties_Attributes: Attributes;
export interface CT_DashStop {
    d?: ST_PositivePercentage;
    sp?: ST_PositivePercentage;
}
export declare const CT_DashStop_Attributes: Attributes;
export interface CT_DashStopList {
    ds?: CT_DashStop[];
}
export declare const CT_DashStopList_Attributes: Attributes;
export interface CT_LineJoinRound {
}
export declare const CT_LineJoinRound_Attributes: Attributes;
export interface CT_LineJoinBevel {
}
export declare const CT_LineJoinBevel_Attributes: Attributes;
export interface CT_LineJoinMiterProperties {
    lim?: ST_PositivePercentage;
}
export declare const CT_LineJoinMiterProperties_Attributes: Attributes;
export type ST_LineEndType = 'none' | 'triangle' | 'stealth' | 'diamond' | 'oval' | 'arrow';
export type ST_LineEndWidth = 'sm' | 'med' | 'lg';
export type ST_LineEndLength = 'sm' | 'med' | 'lg';
export interface CT_LineEndProperties {
    type?: ST_LineEndType;
    w?: ST_LineEndWidth;
    len?: ST_LineEndLength;
}
export declare const CT_LineEndProperties_Attributes: Attributes;
export type ST_LineWidth = ST_Coordinate32Unqualified;
export type ST_LineCap = 'rnd' | 'sq' | 'flat';
export type ST_CompoundLine = 'sng' | 'dbl' | 'thickThin' | 'thinThick' | 'tri';
export type ST_PenAlignment = 'ctr' | 'in';
export interface CT_LineProperties {
    noFill?: CT_NoFillProperties;
    solidFill?: CT_SolidColorFillProperties;
    gradFill?: CT_GradientFillProperties;
    pattFill?: CT_PatternFillProperties;
    prstDash?: CT_PresetLineDashProperties;
    custDash?: CT_DashStopList;
    round?: CT_LineJoinRound;
    bevel?: CT_LineJoinBevel;
    miter?: CT_LineJoinMiterProperties;
    headEnd?: CT_LineEndProperties;
    tailEnd?: CT_LineEndProperties;
    extLst?: CT_OfficeArtExtensionList;
    w?: number;
    cap?: ST_LineCap;
    cmpd?: ST_CompoundLine;
    algn?: ST_PenAlignment;
}
export declare const CT_LineProperties_Attributes: Attributes;
export interface CT_LineStyleList {
    ln?: CT_LineProperties[];
}
export declare const CT_LineStyleList_Attributes: Attributes;
export interface CT_EffectStyleList {
    effectStyle?: CT_EffectStyleItem[];
}
export declare const CT_EffectStyleList_Attributes: Attributes;
export interface CT_BackgroundFillStyleList {
    noFill?: CT_NoFillProperties;
    solidFill?: CT_SolidColorFillProperties;
    gradFill?: CT_GradientFillProperties;
    blipFill?: CT_BlipFillProperties;
    pattFill?: CT_PatternFillProperties;
    grpFill?: CT_GroupFillProperties;
}
export declare const CT_BackgroundFillStyleList_Attributes: Attributes;
export interface CT_StyleMatrix {
    fillStyleLst?: CT_FillStyleList;
    lnStyleLst?: CT_LineStyleList;
    effectStyleLst?: CT_EffectStyleList;
    bgFillStyleLst?: CT_BackgroundFillStyleList;
    name?: string;
}
export declare const CT_StyleMatrix_Attributes: Attributes;
export interface CT_BaseStyles {
    clrScheme?: CT_ColorScheme;
    fontScheme?: CT_FontScheme;
    fmtScheme?: CT_StyleMatrix;
    extLst?: CT_OfficeArtExtensionList;
}
export declare const CT_BaseStyles_Attributes: Attributes;
export type ST_CoordinateUnqualified = number;
export type ST_Coordinate32 = ST_Coordinate32Unqualified | ST_UniversalMeasure;
export type ST_Coordinate32Unqualified = number;
export type ST_PositiveCoordinate32 = ST_Coordinate32Unqualified;
export interface CT_Ratio {
    n?: number;
    d?: number;
}
export declare const CT_Ratio_Attributes: Attributes;
export interface CT_Point2D {
    x?: ST_Coordinate;
    y?: ST_Coordinate;
}
export declare const CT_Point2D_Attributes: Attributes;
export interface CT_PositiveSize2D {
    cx?: number;
    cy?: number;
}
export declare const CT_PositiveSize2D_Attributes: Attributes;
export interface CT_Scale2D {
    sx?: CT_Ratio;
    sy?: CT_Ratio;
}
export declare const CT_Scale2D_Attributes: Attributes;
export interface CT_Transform2D {
    off?: CT_Point2D;
    ext?: CT_PositiveSize2D;
    rot?: number;
    flipH?: boolean;
    flipV?: boolean;
}
export declare const CT_Transform2D_Attributes: Attributes;
export interface CT_GroupTransform2D {
    off?: CT_Point2D;
    ext?: CT_PositiveSize2D;
    chOff?: CT_Point2D;
    chExt?: CT_PositiveSize2D;
    rot?: number;
    flipH?: boolean;
    flipV?: boolean;
}
export declare const CT_GroupTransform2D_Attributes: Attributes;
export interface CT_ColorMRU {
    scrgbClr?: CT_ScRgbColor;
    srgbClr?: CT_SRgbColor;
    hslClr?: CT_HslColor;
    sysClr?: CT_SystemColor;
    schemeClr?: CT_SchemeColor;
    prstClr?: CT_PresetColor;
}
export declare const CT_ColorMRU_Attributes: Attributes;
export type ST_BlackWhiteMode = 'clr' | 'auto' | 'gray' | 'ltGray' | 'invGray' | 'grayWhite' | 'blackGray' | 'blackWhite' | 'black' | 'white' | 'hidden';
export interface CT_EmbeddedWAVAudioFile {
    name?: string;
}
export declare const CT_EmbeddedWAVAudioFile_Attributes: Attributes;
export interface CT_Hyperlink {
    'snd'?: CT_EmbeddedWAVAudioFile;
    'extLst'?: CT_OfficeArtExtensionList;
    'r:id'?: string;
    'invalidUrl'?: string;
    'action'?: string;
    'tgtFrame'?: string;
    'tooltip'?: string;
    'history'?: boolean;
    'highlightClick'?: boolean;
    'endSnd'?: boolean;
}
export declare const CT_Hyperlink_Attributes: Attributes;
export type ST_DrawingElementId = number;
export interface CT_ConnectorLocking {
    extLst?: CT_OfficeArtExtensionList;
}
export declare const CT_ConnectorLocking_Attributes: Attributes;
export interface CT_ShapeLocking {
    extLst?: CT_OfficeArtExtensionList;
    noTextEdit?: boolean;
}
export declare const CT_ShapeLocking_Attributes: Attributes;
export interface CT_PictureLocking {
    extLst?: CT_OfficeArtExtensionList;
    noCrop?: boolean;
}
export declare const CT_PictureLocking_Attributes: Attributes;
export interface CT_GroupLocking {
    extLst?: CT_OfficeArtExtensionList;
    noGrp?: boolean;
    noUngrp?: boolean;
    noSelect?: boolean;
    noRot?: boolean;
    noChangeAspect?: boolean;
    noMove?: boolean;
    noResize?: boolean;
}
export declare const CT_GroupLocking_Attributes: Attributes;
export interface CT_GraphicalObjectFrameLocking {
    extLst?: CT_OfficeArtExtensionList;
    noGrp?: boolean;
    noDrilldown?: boolean;
    noSelect?: boolean;
    noChangeAspect?: boolean;
    noMove?: boolean;
    noResize?: boolean;
}
export declare const CT_GraphicalObjectFrameLocking_Attributes: Attributes;
export interface CT_ContentPartLocking {
    extLst?: CT_OfficeArtExtensionList;
}
export declare const CT_ContentPartLocking_Attributes: Attributes;
export interface CT_NonVisualDrawingProps {
    hlinkClick?: CT_Hyperlink;
    hlinkHover?: CT_Hyperlink;
    extLst?: CT_OfficeArtExtensionList;
    id?: number;
    name?: string;
    descr?: string;
    hidden?: boolean;
    title?: string;
}
export declare const CT_NonVisualDrawingProps_Attributes: Attributes;
export interface CT_NonVisualDrawingShapeProps {
    spLocks?: CT_ShapeLocking;
    extLst?: CT_OfficeArtExtensionList;
    txBox?: boolean;
}
export declare const CT_NonVisualDrawingShapeProps_Attributes: Attributes;
export interface CT_Connection {
    id?: number;
    idx?: number;
}
export declare const CT_Connection_Attributes: Attributes;
export interface CT_NonVisualConnectorProperties {
    cxnSpLocks?: CT_ConnectorLocking;
    stCxn?: CT_Connection;
    endCxn?: CT_Connection;
    extLst?: CT_OfficeArtExtensionList;
}
export declare const CT_NonVisualConnectorProperties_Attributes: Attributes;
export interface CT_NonVisualPictureProperties {
    picLocks?: CT_PictureLocking;
    extLst?: CT_OfficeArtExtensionList;
    preferRelativeResize?: boolean;
}
export declare const CT_NonVisualPictureProperties_Attributes: Attributes;
export interface CT_NonVisualGroupDrawingShapeProps {
    grpSpLocks?: CT_GroupLocking;
    extLst?: CT_OfficeArtExtensionList;
}
export declare const CT_NonVisualGroupDrawingShapeProps_Attributes: Attributes;
export interface CT_NonVisualGraphicFrameProperties {
    graphicFrameLocks?: CT_GraphicalObjectFrameLocking;
    extLst?: CT_OfficeArtExtensionList;
}
export declare const CT_NonVisualGraphicFrameProperties_Attributes: Attributes;
export interface CT_NonVisualContentPartProperties {
    cpLocks?: CT_ContentPartLocking;
    extLst?: CT_OfficeArtExtensionList;
    isComment?: boolean;
}
export declare const CT_NonVisualContentPartProperties_Attributes: Attributes;
export interface CT_GraphicalObjectData {
    __any__?: any;
    uri?: string;
}
export declare const CT_GraphicalObjectData_Attributes: Attributes;
export interface CT_GraphicalObject {
    graphicData?: CT_GraphicalObjectData[];
}
export declare const CT_GraphicalObject_Attributes: Attributes;
export type ST_ChartBuildStep = 'category' | 'ptInCategory' | 'series' | 'ptInSeries' | 'allPts' | 'gridLegend';
export type ST_DgmBuildStep = 'sp' | 'bg';
export interface CT_AnimationDgmElement {
    id?: string;
    bldStep?: ST_DgmBuildStep;
}
export declare const CT_AnimationDgmElement_Attributes: Attributes;
export interface CT_AnimationChartElement {
    seriesIdx?: number;
    categoryIdx?: number;
    bldStep?: ST_ChartBuildStep;
}
export declare const CT_AnimationChartElement_Attributes: Attributes;
export interface CT_AnimationElementChoice {
    dgm?: CT_AnimationDgmElement[];
    chart?: CT_AnimationChartElement[];
}
export declare const CT_AnimationElementChoice_Attributes: Attributes;
export type ST_AnimationBuildType = 'allAtOnce';
export type ST_AnimationDgmOnlyBuildType = 'one' | 'lvlOne' | 'lvlAtOnce';
export type ST_AnimationDgmBuildType = ST_AnimationBuildType | ST_AnimationDgmOnlyBuildType;
export interface CT_AnimationDgmBuildProperties {
    bld?: ST_AnimationDgmBuildType;
    rev?: boolean;
}
export declare const CT_AnimationDgmBuildProperties_Attributes: Attributes;
export type ST_AnimationChartOnlyBuildType = 'series' | 'category' | 'seriesEl' | 'categoryEl';
export type ST_AnimationChartBuildType = ST_AnimationBuildType | ST_AnimationChartOnlyBuildType;
export interface CT_AnimationChartBuildProperties {
    bld?: ST_AnimationChartBuildType;
    animBg?: boolean;
}
export declare const CT_AnimationChartBuildProperties_Attributes: Attributes;
export interface CT_AnimationGraphicalObjectBuildProperties {
    bldDgm?: CT_AnimationDgmBuildProperties[];
    bldChart?: CT_AnimationChartBuildProperties[];
}
export declare const CT_AnimationGraphicalObjectBuildProperties_Attributes: Attributes;
export interface CT_BackgroundFormatting {
    noFill?: CT_NoFillProperties;
    solidFill?: CT_SolidColorFillProperties;
    gradFill?: CT_GradientFillProperties;
    blipFill?: CT_BlipFillProperties;
    pattFill?: CT_PatternFillProperties;
    grpFill?: CT_GroupFillProperties;
    effectLst?: CT_EffectList;
    effectDag?: CT_EffectContainer;
}
export declare const CT_BackgroundFormatting_Attributes: Attributes;
export interface CT_WholeE2oFormatting {
    ln?: CT_LineProperties;
    effectLst?: CT_EffectList;
    effectDag?: CT_EffectContainer;
}
export declare const CT_WholeE2oFormatting_Attributes: Attributes;
export interface CT_GvmlUseShapeRectangle {
}
export declare const CT_GvmlUseShapeRectangle_Attributes: Attributes;
export type ST_GeomGuideName = string;
export type ST_GeomGuideFormula = string;
export interface CT_GeomGuide {
    name?: string;
    fmla?: string;
}
export declare const CT_GeomGuide_Attributes: Attributes;
export interface CT_GeomGuideList {
    gd?: CT_GeomGuide[];
}
export declare const CT_GeomGuideList_Attributes: Attributes;
export type ST_TextShapeType = 'textNoShape' | 'textPlain' | 'textStop' | 'textTriangle' | 'textTriangleInverted' | 'textChevron' | 'textChevronInverted' | 'textRingInside' | 'textRingOutside' | 'textArchUp' | 'textArchDown' | 'textCircle' | 'textButton' | 'textArchUpPour' | 'textArchDownPour' | 'textCirclePour' | 'textButtonPour' | 'textCurveUp' | 'textCurveDown' | 'textCanUp' | 'textCanDown' | 'textWave1' | 'textWave2' | 'textDoubleWave1' | 'textWave4' | 'textInflate' | 'textDeflate' | 'textInflateBottom' | 'textDeflateBottom' | 'textInflateTop' | 'textDeflateTop' | 'textDeflateInflate' | 'textDeflateInflateDeflate' | 'textFadeRight' | 'textFadeLeft' | 'textFadeUp' | 'textFadeDown' | 'textSlantUp' | 'textSlantDown' | 'textCascadeUp' | 'textCascadeDown';
export interface CT_PresetTextShape {
    avLst?: CT_GeomGuideList;
    prst?: ST_TextShapeType;
}
export declare const CT_PresetTextShape_Attributes: Attributes;
export interface CT_TextNoAutofit {
}
export declare const CT_TextNoAutofit_Attributes: Attributes;
export type ST_TextFontScalePercentOrPercentString = string;
export type ST_TextSpacingPercentOrPercentString = string;
export interface CT_TextNormalAutofit {
    fontScale?: string;
    lnSpcReduction?: string;
}
export declare const CT_TextNormalAutofit_Attributes: Attributes;
export interface CT_TextShapeAutofit {
}
export declare const CT_TextShapeAutofit_Attributes: Attributes;
export interface CT_FlatText {
    z?: ST_Coordinate;
}
export declare const CT_FlatText_Attributes: Attributes;
export type ST_TextVertOverflowType = 'overflow' | 'ellipsis' | 'clip';
export type ST_TextHorzOverflowType = 'overflow' | 'clip';
export type ST_TextVerticalType = 'horz' | 'vert' | 'vert270' | 'wordArtVert' | 'eaVert' | 'mongolianVert' | 'wordArtVertRtl';
export type ST_TextWrappingType = 'none' | 'square';
export type ST_TextColumnCount = number;
export type ST_TextAnchoringType = 't' | 'ctr' | 'b' | 'just' | 'dist';
export interface CT_TextBodyProperties {
    prstTxWarp?: CT_PresetTextShape;
    noAutofit?: CT_TextNoAutofit[];
    normAutofit?: CT_TextNormalAutofit[];
    spAutoFit?: CT_TextShapeAutofit[];
    scene3d?: CT_Scene3D;
    sp3d?: CT_Shape3D;
    flatTx?: CT_FlatText;
    extLst?: CT_OfficeArtExtensionList;
    rot?: number;
    spcFirstLastPara?: boolean;
    vertOverflow?: ST_TextVertOverflowType;
    horzOverflow?: ST_TextHorzOverflowType;
    vert?: ST_TextVerticalType;
    wrap?: ST_TextWrappingType;
    lIns?: ST_Coordinate32;
    tIns?: ST_Coordinate32;
    rIns?: ST_Coordinate32;
    bIns?: ST_Coordinate32;
    numCol?: number;
    spcCol?: number;
    rtlCol?: boolean;
    fromWordArt?: boolean;
    anchor?: ST_TextAnchoringType;
    anchorCtr?: boolean;
    forceAA?: boolean;
    upright?: boolean;
    compatLnSpc?: boolean;
}
export declare const CT_TextBodyProperties_Attributes: Attributes;
export interface CT_TextSpacingPercent {
    val?: string;
}
export declare const CT_TextSpacingPercent_Attributes: Attributes;
export type ST_TextSpacingPoint = number;
export interface CT_TextSpacingPoint {
    val?: number;
}
export declare const CT_TextSpacingPoint_Attributes: Attributes;
export interface CT_TextSpacing {
    spcPct?: CT_TextSpacingPercent[];
    spcPts?: CT_TextSpacingPoint[];
}
export declare const CT_TextSpacing_Attributes: Attributes;
export interface CT_TextBulletColorFollowText {
}
export declare const CT_TextBulletColorFollowText_Attributes: Attributes;
export interface CT_TextBulletSizeFollowText {
}
export declare const CT_TextBulletSizeFollowText_Attributes: Attributes;
export type ST_TextBulletSizePercent = string;
export interface CT_TextBulletSizePercent {
    val?: string;
}
export declare const CT_TextBulletSizePercent_Attributes: Attributes;
export type ST_TextFontSize = number;
export interface CT_TextBulletSizePoint {
    val?: number;
}
export declare const CT_TextBulletSizePoint_Attributes: Attributes;
export interface CT_TextBulletTypefaceFollowText {
}
export declare const CT_TextBulletTypefaceFollowText_Attributes: Attributes;
export interface CT_TextNoBullet {
}
export declare const CT_TextNoBullet_Attributes: Attributes;
export type ST_TextAutonumberScheme = 'alphaLcParenBoth' | 'alphaUcParenBoth' | 'alphaLcParenR' | 'alphaUcParenR' | 'alphaLcPeriod' | 'alphaUcPeriod' | 'arabicParenBoth' | 'arabicParenR' | 'arabicPeriod' | 'arabicPlain' | 'romanLcParenBoth' | 'romanUcParenBoth' | 'romanLcParenR' | 'romanUcParenR' | 'romanLcPeriod' | 'romanUcPeriod' | 'circleNumDbPlain' | 'circleNumWdBlackPlain' | 'circleNumWdWhitePlain' | 'arabicDbPeriod' | 'arabicDbPlain' | 'ea1ChsPeriod' | 'ea1ChsPlain' | 'ea1ChtPeriod' | 'ea1ChtPlain' | 'ea1JpnChsDbPeriod' | 'ea1JpnKorPlain' | 'ea1JpnKorPeriod' | 'arabic1Minus' | 'arabic2Minus' | 'hebrew2Minus' | 'thaiAlphaPeriod' | 'thaiAlphaParenR' | 'thaiAlphaParenBoth' | 'thaiNumPeriod' | 'thaiNumParenR' | 'thaiNumParenBoth' | 'hindiAlphaPeriod' | 'hindiNumPeriod' | 'hindiNumParenR' | 'hindiAlpha1Period';
export type ST_TextBulletStartAtNum = number;
export interface CT_TextAutonumberBullet {
    type?: ST_TextAutonumberScheme;
    startAt?: number;
}
export declare const CT_TextAutonumberBullet_Attributes: Attributes;
export interface CT_TextCharBullet {
    char?: string;
}
export declare const CT_TextCharBullet_Attributes: Attributes;
export interface CT_TextBlipBullet {
    blip?: CT_Blip;
}
export declare const CT_TextBlipBullet_Attributes: Attributes;
export type ST_TextTabAlignType = 'l' | 'ctr' | 'r' | 'dec';
export interface CT_TextTabStop {
    pos?: ST_Coordinate32;
    algn?: ST_TextTabAlignType;
}
export declare const CT_TextTabStop_Attributes: Attributes;
export interface CT_TextTabStopList {
    tab?: CT_TextTabStop[];
}
export declare const CT_TextTabStopList_Attributes: Attributes;
export interface CT_TextUnderlineLineFollowText {
}
export declare const CT_TextUnderlineLineFollowText_Attributes: Attributes;
export interface CT_TextUnderlineFillFollowText {
}
export declare const CT_TextUnderlineFillFollowText_Attributes: Attributes;
export interface CT_TextUnderlineFillGroupWrapper {
}
export declare const CT_TextUnderlineFillGroupWrapper_Attributes: Attributes;
export interface CT_Boolean {
    val?: boolean;
}
export declare const CT_Boolean_Attributes: Attributes;
export type ST_TextUnderlineType = 'none' | 'words' | 'sng' | 'dbl' | 'heavy' | 'dotted' | 'dottedHeavy' | 'dash' | 'dashHeavy' | 'dashLong' | 'dashLongHeavy' | 'dotDash' | 'dotDashHeavy' | 'dotDotDash' | 'dotDotDashHeavy' | 'wavy' | 'wavyHeavy' | 'wavyDbl';
export type ST_TextStrikeType = 'noStrike' | 'sngStrike' | 'dblStrike';
export type ST_TextNonNegativePoint = number;
export type ST_TextCapsType = 'none' | 'small' | 'all';
export type ST_TextPoint = ST_TextPointUnqualified | ST_UniversalMeasure;
export interface CT_TextCharacterProperties {
    ln?: CT_LineProperties;
    noFill?: CT_NoFillProperties;
    solidFill?: CT_SolidColorFillProperties;
    gradFill?: CT_GradientFillProperties;
    blipFill?: CT_BlipFillProperties;
    pattFill?: CT_PatternFillProperties;
    grpFill?: CT_GroupFillProperties;
    effectLst?: CT_EffectList;
    effectDag?: CT_EffectContainer;
    highlight?: CT_Color;
    uLnTx?: CT_TextUnderlineLineFollowText[];
    uLn?: CT_LineProperties;
    uFillTx?: CT_TextUnderlineFillFollowText[];
    uFill?: CT_TextUnderlineFillGroupWrapper[];
    latin?: CT_TextFont;
    ea?: CT_TextFont;
    cs?: CT_TextFont;
    sym?: CT_TextFont;
    hlinkClick?: CT_Hyperlink;
    hlinkMouseOver?: CT_Hyperlink;
    rtl?: CT_Boolean[];
    extLst?: CT_OfficeArtExtensionList;
    kumimoji?: boolean;
    lang?: string;
    altLang?: string;
    sz?: number;
    b?: boolean;
    i?: boolean;
    u?: ST_TextUnderlineType;
    strike?: ST_TextStrikeType;
    kern?: number;
    cap?: ST_TextCapsType;
    spc?: ST_TextPoint;
    normalizeH?: boolean;
    baseline?: string;
    noProof?: boolean;
    dirty?: boolean;
    err?: boolean;
    smtClean?: boolean;
    smtId?: number;
    bmk?: string;
}
export declare const CT_TextCharacterProperties_Attributes: Attributes;
export type ST_TextMargin = ST_Coordinate32Unqualified;
export type ST_TextIndentLevelType = number;
export type ST_TextIndent = ST_Coordinate32Unqualified;
export type ST_TextAlignType = 'l' | 'ctr' | 'r' | 'just' | 'justLow' | 'dist' | 'thaiDist';
export type ST_TextFontAlignType = 'auto' | 't' | 'ctr' | 'base' | 'b';
export interface CT_TextParagraphProperties {
    lnSpc?: CT_TextSpacing;
    spcBef?: CT_TextSpacing;
    spcAft?: CT_TextSpacing;
    buClrTx?: CT_TextBulletColorFollowText;
    buClr?: CT_Color;
    buSzTx?: CT_TextBulletSizeFollowText[];
    buSzPct?: CT_TextBulletSizePercent[];
    buSzPts?: CT_TextBulletSizePoint[];
    buFontTx?: CT_TextBulletTypefaceFollowText[];
    buFont?: CT_TextFont[];
    buNone?: CT_TextNoBullet[];
    buAutoNum?: CT_TextAutonumberBullet[];
    buChar?: CT_TextCharBullet[];
    buBlip?: CT_TextBlipBullet[];
    tabLst?: CT_TextTabStopList;
    defRPr?: CT_TextCharacterProperties;
    extLst?: CT_OfficeArtExtensionList;
    marL?: number;
    marR?: number;
    lvl?: number;
    indent?: number;
    algn?: ST_TextAlignType;
    defTabSz?: ST_Coordinate32;
    rtl?: boolean;
    eaLnBrk?: boolean;
    fontAlgn?: ST_TextFontAlignType;
    latinLnBrk?: boolean;
    hangingPunct?: boolean;
}
export declare const CT_TextParagraphProperties_Attributes: Attributes;
export interface CT_TextListStyle {
    defPPr?: CT_TextParagraphProperties;
    lvl1pPr?: CT_TextParagraphProperties;
    lvl2pPr?: CT_TextParagraphProperties;
    lvl3pPr?: CT_TextParagraphProperties;
    lvl4pPr?: CT_TextParagraphProperties;
    lvl5pPr?: CT_TextParagraphProperties;
    lvl6pPr?: CT_TextParagraphProperties;
    lvl7pPr?: CT_TextParagraphProperties;
    lvl8pPr?: CT_TextParagraphProperties;
    lvl9pPr?: CT_TextParagraphProperties;
    extLst?: CT_OfficeArtExtensionList;
}
export declare const CT_TextListStyle_Attributes: Attributes;
export interface CT_RegularTextRun {
    rPr?: CT_TextCharacterProperties;
    t?: string;
}
export declare const CT_RegularTextRun_Attributes: Attributes;
export interface CT_TextLineBreak {
    rPr?: CT_TextCharacterProperties;
}
export declare const CT_TextLineBreak_Attributes: Attributes;
export interface CT_TextField {
    rPr?: CT_TextCharacterProperties;
    pPr?: CT_TextParagraphProperties;
    t?: string;
    id?: string;
    type?: string;
}
export declare const CT_TextField_Attributes: Attributes;
export interface CT_TextParagraph {
    pPr?: CT_TextParagraphProperties;
    r?: CT_RegularTextRun[];
    br?: CT_TextLineBreak[];
    fld?: CT_TextField[];
    endParaRPr?: CT_TextCharacterProperties;
}
export declare const CT_TextParagraph_Attributes: Attributes;
export interface CT_TextBody {
    bodyPr?: CT_TextBodyProperties;
    lstStyle?: CT_TextListStyle;
    p?: CT_TextParagraph[];
}
export declare const CT_TextBody_Attributes: Attributes;
export interface CT_GvmlTextShape {
    txBody?: CT_TextBody;
    useSpRect?: CT_GvmlUseShapeRectangle;
    xfrm?: CT_Transform2D;
    extLst?: CT_OfficeArtExtensionList;
}
export declare const CT_GvmlTextShape_Attributes: Attributes;
export interface CT_GvmlShapeNonVisual {
    cNvPr?: CT_NonVisualDrawingProps;
    cNvSpPr?: CT_NonVisualDrawingShapeProps;
}
export declare const CT_GvmlShapeNonVisual_Attributes: Attributes;
export type ST_AdjCoordinate = ST_Coordinate | ST_GeomGuideName;
export interface CT_AdjPoint2D {
    x?: ST_AdjCoordinate;
    y?: ST_AdjCoordinate;
}
export declare const CT_AdjPoint2D_Attributes: Attributes;
export interface CT_XYAdjustHandle {
    pos?: CT_AdjPoint2D;
    gdRefX?: string;
    minX?: ST_AdjCoordinate;
    maxX?: ST_AdjCoordinate;
    gdRefY?: string;
    minY?: ST_AdjCoordinate;
    maxY?: ST_AdjCoordinate;
}
export declare const CT_XYAdjustHandle_Attributes: Attributes;
export type ST_AdjAngle = ST_Angle | ST_GeomGuideName;
export interface CT_PolarAdjustHandle {
    pos?: CT_AdjPoint2D;
    gdRefR?: string;
    minR?: ST_AdjCoordinate;
    maxR?: ST_AdjCoordinate;
    gdRefAng?: string;
    minAng?: ST_AdjAngle;
    maxAng?: ST_AdjAngle;
}
export declare const CT_PolarAdjustHandle_Attributes: Attributes;
export interface CT_AdjustHandleList {
    ahXY?: CT_XYAdjustHandle;
    ahPolar?: CT_PolarAdjustHandle;
}
export declare const CT_AdjustHandleList_Attributes: Attributes;
export interface CT_ConnectionSite {
    pos?: CT_AdjPoint2D;
    ang?: ST_AdjAngle;
}
export declare const CT_ConnectionSite_Attributes: Attributes;
export interface CT_ConnectionSiteList {
    cxn?: CT_ConnectionSite[];
}
export declare const CT_ConnectionSiteList_Attributes: Attributes;
export interface CT_GeomRect {
    l?: ST_AdjCoordinate;
    t?: ST_AdjCoordinate;
    r?: ST_AdjCoordinate;
    b?: ST_AdjCoordinate;
}
export declare const CT_GeomRect_Attributes: Attributes;
export interface CT_Path2DClose {
}
export declare const CT_Path2DClose_Attributes: Attributes;
export interface CT_Path2DMoveTo {
    pt?: CT_AdjPoint2D;
}
export declare const CT_Path2DMoveTo_Attributes: Attributes;
export interface CT_Path2DLineTo {
    pt?: CT_AdjPoint2D;
}
export declare const CT_Path2DLineTo_Attributes: Attributes;
export interface CT_Path2DArcTo {
    wR?: ST_AdjCoordinate;
    hR?: ST_AdjCoordinate;
    stAng?: ST_AdjAngle;
    swAng?: ST_AdjAngle;
}
export declare const CT_Path2DArcTo_Attributes: Attributes;
export interface CT_Path2DQuadBezierTo {
    pt?: CT_AdjPoint2D[];
}
export declare const CT_Path2DQuadBezierTo_Attributes: Attributes;
export interface CT_Path2DCubicBezierTo {
    pt?: CT_AdjPoint2D[];
}
export declare const CT_Path2DCubicBezierTo_Attributes: Attributes;
export type ST_PathFillMode = 'none' | 'norm' | 'lighten' | 'lightenLess' | 'darken' | 'darkenLess';
export interface CT_Path2D {
    close?: CT_Path2DClose;
    moveTo?: CT_Path2DMoveTo;
    lnTo?: CT_Path2DLineTo;
    arcTo?: CT_Path2DArcTo;
    quadBezTo?: CT_Path2DQuadBezierTo;
    cubicBezTo?: CT_Path2DCubicBezierTo;
    w?: number;
    h?: number;
    fill?: ST_PathFillMode;
    stroke?: boolean;
    extrusionOk?: boolean;
}
export declare const CT_Path2D_Attributes: Attributes;
export interface CT_Path2DList {
    path?: CT_Path2D[];
}
export declare const CT_Path2DList_Attributes: Attributes;
export interface CT_CustomGeometry2D {
    avLst?: CT_GeomGuideList;
    gdLst?: CT_GeomGuideList;
    ahLst?: CT_AdjustHandleList;
    cxnLst?: CT_ConnectionSiteList;
    rect?: CT_GeomRect;
    pathLst?: CT_Path2DList;
}
export declare const CT_CustomGeometry2D_Attributes: Attributes;
export type ST_ShapeType = 'line' | 'lineInv' | 'triangle' | 'rtTriangle' | 'rect' | 'diamond' | 'parallelogram' | 'trapezoid' | 'nonIsoscelesTrapezoid' | 'pentagon' | 'hexagon' | 'heptagon' | 'octagon' | 'decagon' | 'dodecagon' | 'star4' | 'star5' | 'star6' | 'star7' | 'star8' | 'star10' | 'star12' | 'star16' | 'star24' | 'star32' | 'roundRect' | 'round1Rect' | 'round2SameRect' | 'round2DiagRect' | 'snipRoundRect' | 'snip1Rect' | 'snip2SameRect' | 'snip2DiagRect' | 'plaque' | 'ellipse' | 'teardrop' | 'homePlate' | 'chevron' | 'pieWedge' | 'pie' | 'blockArc' | 'donut' | 'noSmoking' | 'rightArrow' | 'leftArrow' | 'upArrow' | 'downArrow' | 'stripedRightArrow' | 'notchedRightArrow' | 'bentUpArrow' | 'leftRightArrow' | 'upDownArrow' | 'leftUpArrow' | 'leftRightUpArrow' | 'quadArrow' | 'leftArrowCallout' | 'rightArrowCallout' | 'upArrowCallout' | 'downArrowCallout' | 'leftRightArrowCallout' | 'upDownArrowCallout' | 'quadArrowCallout' | 'bentArrow' | 'uturnArrow' | 'circularArrow' | 'leftCircularArrow' | 'leftRightCircularArrow' | 'curvedRightArrow' | 'curvedLeftArrow' | 'curvedUpArrow' | 'curvedDownArrow' | 'swooshArrow' | 'cube' | 'can' | 'lightningBolt' | 'heart' | 'sun' | 'moon' | 'smileyFace' | 'irregularSeal1' | 'irregularSeal2' | 'foldedCorner' | 'bevel' | 'frame' | 'halfFrame' | 'corner' | 'diagStripe' | 'chord' | 'arc' | 'leftBracket' | 'rightBracket' | 'leftBrace' | 'rightBrace' | 'bracketPair' | 'bracePair' | 'straightConnector1' | 'bentConnector2' | 'bentConnector3' | 'bentConnector4' | 'bentConnector5' | 'curvedConnector2' | 'curvedConnector3' | 'curvedConnector4' | 'curvedConnector5' | 'callout1' | 'callout2' | 'callout3' | 'accentCallout1' | 'accentCallout2' | 'accentCallout3' | 'borderCallout1' | 'borderCallout2' | 'borderCallout3' | 'accentBorderCallout1' | 'accentBorderCallout2' | 'accentBorderCallout3' | 'wedgeRectCallout' | 'wedgeRoundRectCallout' | 'wedgeEllipseCallout' | 'cloudCallout' | 'cloud' | 'ribbon' | 'ribbon2' | 'ellipseRibbon' | 'ellipseRibbon2' | 'leftRightRibbon' | 'verticalScroll' | 'horizontalScroll' | 'wave' | 'doubleWave' | 'plus' | 'flowChartProcess' | 'flowChartDecision' | 'flowChartInputOutput' | 'flowChartPredefinedProcess' | 'flowChartInternalStorage' | 'flowChartDocument' | 'flowChartMultidocument' | 'flowChartTerminator' | 'flowChartPreparation' | 'flowChartManualInput' | 'flowChartManualOperation' | 'flowChartConnector' | 'flowChartPunchedCard' | 'flowChartPunchedTape' | 'flowChartSummingJunction' | 'flowChartOr' | 'flowChartCollate' | 'flowChartSort' | 'flowChartExtract' | 'flowChartMerge' | 'flowChartOfflineStorage' | 'flowChartOnlineStorage' | 'flowChartMagneticTape' | 'flowChartMagneticDisk' | 'flowChartMagneticDrum' | 'flowChartDisplay' | 'flowChartDelay' | 'flowChartAlternateProcess' | 'flowChartOffpageConnector' | 'actionButtonBlank' | 'actionButtonHome' | 'actionButtonHelp' | 'actionButtonInformation' | 'actionButtonForwardNext' | 'actionButtonBackPrevious' | 'actionButtonEnd' | 'actionButtonBeginning' | 'actionButtonReturn' | 'actionButtonDocument' | 'actionButtonSound' | 'actionButtonMovie' | 'gear6' | 'gear9' | 'funnel' | 'mathPlus' | 'mathMinus' | 'mathMultiply' | 'mathDivide' | 'mathEqual' | 'mathNotEqual' | 'cornerTabs' | 'squareTabs' | 'plaqueTabs' | 'chartX' | 'chartStar' | 'chartPlus';
export interface CT_PresetGeometry2D {
    avLst?: CT_GeomGuideList;
    prst?: ST_ShapeType;
}
export declare const CT_PresetGeometry2D_Attributes: Attributes;
export interface CT_ShapeProperties {
    xfrm?: CT_Transform2D;
    custGeom?: CT_CustomGeometry2D;
    prstGeom?: CT_PresetGeometry2D;
    noFill?: CT_NoFillProperties;
    solidFill?: CT_SolidColorFillProperties;
    gradFill?: CT_GradientFillProperties;
    blipFill?: CT_BlipFillProperties;
    pattFill?: CT_PatternFillProperties;
    grpFill?: CT_GroupFillProperties;
    ln?: CT_LineProperties;
    effectLst?: CT_EffectList;
    effectDag?: CT_EffectContainer;
    scene3d?: CT_Scene3D;
    sp3d?: CT_Shape3D;
    extLst?: CT_OfficeArtExtensionList;
    bwMode?: ST_BlackWhiteMode;
}
export declare const CT_ShapeProperties_Attributes: Attributes;
export interface CT_StyleMatrixReference {
    scrgbClr?: CT_ScRgbColor;
    srgbClr?: CT_SRgbColor;
    hslClr?: CT_HslColor;
    sysClr?: CT_SystemColor;
    schemeClr?: CT_SchemeColor;
    prstClr?: CT_PresetColor;
    idx?: number;
}
export declare const CT_StyleMatrixReference_Attributes: Attributes;
export interface CT_FontReference {
    scrgbClr?: CT_ScRgbColor;
    srgbClr?: CT_SRgbColor;
    hslClr?: CT_HslColor;
    sysClr?: CT_SystemColor;
    schemeClr?: CT_SchemeColor;
    prstClr?: CT_PresetColor;
    idx?: ST_FontCollectionIndex;
}
export declare const CT_FontReference_Attributes: Attributes;
export interface CT_ShapeStyle {
    lnRef?: CT_StyleMatrixReference;
    fillRef?: CT_StyleMatrixReference;
    effectRef?: CT_StyleMatrixReference;
    fontRef?: CT_FontReference;
}
export declare const CT_ShapeStyle_Attributes: Attributes;
export interface CT_GvmlShape {
    nvSpPr?: CT_GvmlShapeNonVisual;
    spPr?: CT_ShapeProperties;
    txSp?: CT_GvmlTextShape;
    style?: CT_ShapeStyle;
    extLst?: CT_OfficeArtExtensionList;
}
export declare const CT_GvmlShape_Attributes: Attributes;
export interface CT_GvmlConnectorNonVisual {
    cNvPr?: CT_NonVisualDrawingProps;
    cNvCxnSpPr?: CT_NonVisualConnectorProperties;
}
export declare const CT_GvmlConnectorNonVisual_Attributes: Attributes;
export interface CT_GvmlConnector {
    nvCxnSpPr?: CT_GvmlConnectorNonVisual;
    spPr?: CT_ShapeProperties;
    style?: CT_ShapeStyle;
    extLst?: CT_OfficeArtExtensionList;
}
export declare const CT_GvmlConnector_Attributes: Attributes;
export interface CT_GvmlPictureNonVisual {
    cNvPr?: CT_NonVisualDrawingProps;
    cNvPicPr?: CT_NonVisualPictureProperties;
}
export declare const CT_GvmlPictureNonVisual_Attributes: Attributes;
export interface CT_GvmlPicture {
    nvPicPr?: CT_GvmlPictureNonVisual;
    blipFill?: CT_BlipFillProperties;
    spPr?: CT_ShapeProperties;
    style?: CT_ShapeStyle;
    extLst?: CT_OfficeArtExtensionList;
}
export declare const CT_GvmlPicture_Attributes: Attributes;
export interface CT_GvmlGraphicFrameNonVisual {
    cNvPr?: CT_NonVisualDrawingProps;
    cNvGraphicFramePr?: CT_NonVisualGraphicFrameProperties;
}
export declare const CT_GvmlGraphicFrameNonVisual_Attributes: Attributes;
export interface CT_GvmlGraphicalObjectFrame {
    nvGraphicFramePr?: CT_GvmlGraphicFrameNonVisual;
    xfrm?: CT_Transform2D;
    extLst?: CT_OfficeArtExtensionList;
}
export declare const CT_GvmlGraphicalObjectFrame_Attributes: Attributes;
export interface CT_GvmlGroupShapeNonVisual {
    cNvPr?: CT_NonVisualDrawingProps;
    cNvGrpSpPr?: CT_NonVisualGroupDrawingShapeProps;
}
export declare const CT_GvmlGroupShapeNonVisual_Attributes: Attributes;
export type CT_GvmlGroupShape = any;
export declare const CT_GvmlGroupShape_Attributes: Attributes;
export interface CT_GroupShapeProperties {
    xfrm?: CT_GroupTransform2D;
    noFill?: CT_NoFillProperties;
    solidFill?: CT_SolidColorFillProperties;
    gradFill?: CT_GradientFillProperties;
    blipFill?: CT_BlipFillProperties;
    pattFill?: CT_PatternFillProperties;
    grpFill?: CT_GroupFillProperties;
    effectLst?: CT_EffectList;
    effectDag?: CT_EffectContainer;
    scene3d?: CT_Scene3D;
    extLst?: CT_OfficeArtExtensionList;
    bwMode?: ST_BlackWhiteMode;
}
export declare const CT_GroupShapeProperties_Attributes: Attributes;
export interface CT_AlphaOutsetEffect {
    rad?: ST_Coordinate;
}
export declare const CT_AlphaOutsetEffect_Attributes: Attributes;
export interface CT_RelativeOffsetEffect {
    tx?: string;
    ty?: string;
}
export declare const CT_RelativeOffsetEffect_Attributes: Attributes;
export interface CT_TransformEffect {
    sx?: string;
    sy?: string;
    kx?: number;
    ky?: number;
    tx?: ST_Coordinate;
    ty?: ST_Coordinate;
}
export declare const CT_TransformEffect_Attributes: Attributes;
export interface CT_FillProperties {
    noFill?: CT_NoFillProperties;
    solidFill?: CT_SolidColorFillProperties;
    gradFill?: CT_GradientFillProperties;
    blipFill?: CT_BlipFillProperties;
    pattFill?: CT_PatternFillProperties;
    grpFill?: CT_GroupFillProperties;
}
export declare const CT_FillProperties_Attributes: Attributes;
export interface CT_FillEffect {
    noFill?: CT_NoFillProperties;
    solidFill?: CT_SolidColorFillProperties;
    gradFill?: CT_GradientFillProperties;
    blipFill?: CT_BlipFillProperties;
    pattFill?: CT_PatternFillProperties;
    grpFill?: CT_GroupFillProperties;
}
export declare const CT_FillEffect_Attributes: Attributes;
export interface CT_EffectReference {
    ref?: string;
}
export declare const CT_EffectReference_Attributes: Attributes;
export interface CT_BlendEffect {
    cont?: CT_EffectContainer;
    blend?: ST_BlendMode;
}
export declare const CT_BlendEffect_Attributes: Attributes;
export interface CT_EffectProperties {
    effectLst?: CT_EffectList;
    effectDag?: CT_EffectContainer;
}
export declare const CT_EffectProperties_Attributes: Attributes;
export type ST_ShapeID = string;
export interface CT_DefaultShapeDefinition {
    spPr?: CT_ShapeProperties;
    bodyPr?: CT_TextBodyProperties;
    lstStyle?: CT_TextListStyle;
    style?: CT_ShapeStyle;
    extLst?: CT_OfficeArtExtensionList;
}
export declare const CT_DefaultShapeDefinition_Attributes: Attributes;
export interface CT_ObjectStyleDefaults {
    spDef?: CT_DefaultShapeDefinition;
    lnDef?: CT_DefaultShapeDefinition;
    txDef?: CT_DefaultShapeDefinition;
    extLst?: CT_OfficeArtExtensionList;
}
export declare const CT_ObjectStyleDefaults_Attributes: Attributes;
export interface CT_EmptyElement {
}
export declare const CT_EmptyElement_Attributes: Attributes;
export interface CT_ColorMapping {
    extLst?: CT_OfficeArtExtensionList;
    bg1?: ST_ColorSchemeIndex;
    tx1?: ST_ColorSchemeIndex;
    bg2?: ST_ColorSchemeIndex;
    tx2?: ST_ColorSchemeIndex;
    accent1?: ST_ColorSchemeIndex;
    accent2?: ST_ColorSchemeIndex;
    accent3?: ST_ColorSchemeIndex;
    accent4?: ST_ColorSchemeIndex;
    accent5?: ST_ColorSchemeIndex;
    accent6?: ST_ColorSchemeIndex;
    hlink?: ST_ColorSchemeIndex;
    folHlink?: ST_ColorSchemeIndex;
}
export declare const CT_ColorMapping_Attributes: Attributes;
export interface CT_ColorMappingOverride {
    masterClrMapping?: CT_EmptyElement[];
    overrideClrMapping?: CT_ColorMapping[];
}
export declare const CT_ColorMappingOverride_Attributes: Attributes;
export interface CT_ColorSchemeAndMapping {
    clrScheme?: CT_ColorScheme;
    clrMap?: CT_ColorMapping;
}
export declare const CT_ColorSchemeAndMapping_Attributes: Attributes;
export interface CT_ColorSchemeList {
    extraClrScheme?: CT_ColorSchemeAndMapping[];
}
export declare const CT_ColorSchemeList_Attributes: Attributes;
export interface CT_OfficeStyleSheet {
    themeElements?: CT_BaseStyles;
    objectDefaults?: CT_ObjectStyleDefaults;
    extraClrSchemeLst?: CT_ColorSchemeList;
    custClrLst?: CT_CustomColorList;
    extLst?: CT_OfficeArtExtensionList;
    name?: string;
}
export declare const CT_OfficeStyleSheet_Attributes: Attributes;
export interface CT_BaseStylesOverride {
    clrScheme?: CT_ColorScheme;
    fontScheme?: CT_FontScheme;
    fmtScheme?: CT_StyleMatrix;
}
export declare const CT_BaseStylesOverride_Attributes: Attributes;
export interface CT_ClipboardStyleSheet {
    themeElements?: CT_BaseStyles;
    clrMap?: CT_ColorMapping;
}
export declare const CT_ClipboardStyleSheet_Attributes: Attributes;
export interface CT_Cell3D {
    bevel?: CT_Bevel;
    lightRig?: CT_LightRig;
    extLst?: CT_OfficeArtExtensionList;
    prstMaterial?: ST_PresetMaterialType;
}
export declare const CT_Cell3D_Attributes: Attributes;
export interface CT_Headers {
    header?: string[];
}
export declare const CT_Headers_Attributes: Attributes;
export interface CT_TableCellProperties {
    lnL?: CT_LineProperties;
    lnR?: CT_LineProperties;
    lnT?: CT_LineProperties;
    lnB?: CT_LineProperties;
    lnTlToBr?: CT_LineProperties;
    lnBlToTr?: CT_LineProperties;
    cell3D?: CT_Cell3D;
    noFill?: CT_NoFillProperties;
    solidFill?: CT_SolidColorFillProperties;
    gradFill?: CT_GradientFillProperties;
    blipFill?: CT_BlipFillProperties;
    pattFill?: CT_PatternFillProperties;
    grpFill?: CT_GroupFillProperties;
    headers?: CT_Headers[];
    extLst?: CT_OfficeArtExtensionList;
    marL?: ST_Coordinate32;
    marR?: ST_Coordinate32;
    marT?: ST_Coordinate32;
    marB?: ST_Coordinate32;
    vert?: ST_TextVerticalType;
    anchor?: ST_TextAnchoringType;
    anchorCtr?: boolean;
    horzOverflow?: ST_TextHorzOverflowType;
}
export declare const CT_TableCellProperties_Attributes: Attributes;
export interface CT_TableCol {
    extLst?: CT_OfficeArtExtensionList;
    w?: ST_Coordinate;
}
export declare const CT_TableCol_Attributes: Attributes;
export interface CT_TableGrid {
    gridCol?: CT_TableCol[];
}
export declare const CT_TableGrid_Attributes: Attributes;
export interface CT_TableCell {
    txBody?: CT_TextBody;
    tcPr?: CT_TableCellProperties;
    extLst?: CT_OfficeArtExtensionList;
    rowSpan?: number;
    gridSpan?: number;
    hMerge?: boolean;
    vMerge?: boolean;
    id?: string;
}
export declare const CT_TableCell_Attributes: Attributes;
export interface CT_TableRow {
    tc?: CT_TableCell[];
    extLst?: CT_OfficeArtExtensionList;
    h?: ST_Coordinate;
}
export declare const CT_TableRow_Attributes: Attributes;
export interface CT_TableBackgroundStyle {
    fill?: CT_FillProperties;
    fillRef?: CT_StyleMatrixReference;
    effect?: CT_EffectProperties;
    effectRef?: CT_StyleMatrixReference;
}
export declare const CT_TableBackgroundStyle_Attributes: Attributes;
export type ST_OnOffStyleType = 'on' | 'off' | 'def';
export interface CT_TableStyleTextStyle {
    font?: CT_FontCollection;
    fontRef?: CT_FontReference;
    scrgbClr?: CT_ScRgbColor;
    srgbClr?: CT_SRgbColor;
    hslClr?: CT_HslColor;
    sysClr?: CT_SystemColor;
    schemeClr?: CT_SchemeColor;
    prstClr?: CT_PresetColor;
    extLst?: CT_OfficeArtExtensionList;
    b?: ST_OnOffStyleType;
    i?: ST_OnOffStyleType;
}
export declare const CT_TableStyleTextStyle_Attributes: Attributes;
export interface CT_ThemeableLineStyle {
    ln?: CT_LineProperties;
    lnRef?: CT_StyleMatrixReference;
}
export declare const CT_ThemeableLineStyle_Attributes: Attributes;
export interface CT_TableCellBorderStyle {
    left?: CT_ThemeableLineStyle;
    right?: CT_ThemeableLineStyle;
    top?: CT_ThemeableLineStyle;
    bottom?: CT_ThemeableLineStyle;
    insideH?: CT_ThemeableLineStyle;
    insideV?: CT_ThemeableLineStyle;
    tl2br?: CT_ThemeableLineStyle;
    tr2bl?: CT_ThemeableLineStyle;
    extLst?: CT_OfficeArtExtensionList;
}
export declare const CT_TableCellBorderStyle_Attributes: Attributes;
export interface CT_TableStyleCellStyle {
    tcBdr?: CT_TableCellBorderStyle;
    fill?: CT_FillProperties;
    fillRef?: CT_StyleMatrixReference;
    cell3D?: CT_Cell3D;
}
export declare const CT_TableStyleCellStyle_Attributes: Attributes;
export interface CT_TablePartStyle {
    tcTxStyle?: CT_TableStyleTextStyle;
    tcStyle?: CT_TableStyleCellStyle;
}
export declare const CT_TablePartStyle_Attributes: Attributes;
export interface CT_TableStyle {
    tblBg?: CT_TableBackgroundStyle;
    wholeTbl?: CT_TablePartStyle;
    band1H?: CT_TablePartStyle;
    band2H?: CT_TablePartStyle;
    band1V?: CT_TablePartStyle;
    band2V?: CT_TablePartStyle;
    lastCol?: CT_TablePartStyle;
    firstCol?: CT_TablePartStyle;
    lastRow?: CT_TablePartStyle;
    seCell?: CT_TablePartStyle;
    swCell?: CT_TablePartStyle;
    firstRow?: CT_TablePartStyle;
    neCell?: CT_TablePartStyle;
    nwCell?: CT_TablePartStyle;
    extLst?: CT_OfficeArtExtensionList;
    styleId?: string;
    styleName?: string;
}
export declare const CT_TableStyle_Attributes: Attributes;
export interface CT_TableProperties {
    noFill?: CT_NoFillProperties;
    solidFill?: CT_SolidColorFillProperties;
    gradFill?: CT_GradientFillProperties;
    blipFill?: CT_BlipFillProperties;
    pattFill?: CT_PatternFillProperties;
    grpFill?: CT_GroupFillProperties;
    effectLst?: CT_EffectList;
    effectDag?: CT_EffectContainer;
    tableStyle?: CT_TableStyle[];
    tableStyleId?: string[];
    extLst?: CT_OfficeArtExtensionList;
    rtl?: boolean;
    firstRow?: boolean;
    firstCol?: boolean;
    lastRow?: boolean;
    lastCol?: boolean;
    bandRow?: boolean;
    bandCol?: boolean;
}
export declare const CT_TableProperties_Attributes: Attributes;
export interface CT_Table {
    tblPr?: CT_TableProperties;
    tblGrid?: CT_TableGrid;
    tr?: CT_TableRow[];
}
export declare const CT_Table_Attributes: Attributes;
export interface CT_TableStyleList {
    tblStyle?: CT_TableStyle[];
    def?: string;
}
export declare const CT_TableStyleList_Attributes: Attributes;
export type ST_TextBulletSize = string;
export type ST_TextPointUnqualified = number;
export type ST_MarkerCoordinate = number;
export interface CT_ShapeNonVisual {
    cNvPr?: CT_NonVisualDrawingProps;
    cNvSpPr?: CT_NonVisualDrawingShapeProps;
}
export declare const CT_ShapeNonVisual_Attributes: Attributes;
export interface CT_ConnectorNonVisual {
    cNvPr?: CT_NonVisualDrawingProps;
    cNvCxnSpPr?: CT_NonVisualConnectorProperties;
}
export declare const CT_ConnectorNonVisual_Attributes: Attributes;
export interface CT_Connector {
    nvCxnSpPr?: CT_ConnectorNonVisual;
    spPr?: CT_ShapeProperties;
    style?: CT_ShapeStyle;
    macro?: string;
    fPublished?: boolean;
}
export declare const CT_Connector_Attributes: Attributes;
export interface CT_PictureNonVisual {
    cNvPr?: CT_NonVisualDrawingProps;
    cNvPicPr?: CT_NonVisualPictureProperties;
}
export declare const CT_PictureNonVisual_Attributes: Attributes;
export interface CT_Picture {
    nvPicPr?: CT_PictureNonVisual;
    blipFill?: CT_BlipFillProperties;
    spPr?: CT_ShapeProperties;
    style?: CT_ShapeStyle;
    macro?: string;
    fPublished?: boolean;
}
export declare const CT_Picture_Attributes: Attributes;
export interface CT_GraphicFrameNonVisual {
    cNvPr?: CT_NonVisualDrawingProps;
    cNvGraphicFramePr?: CT_NonVisualGraphicFrameProperties;
}
export declare const CT_GraphicFrameNonVisual_Attributes: Attributes;
export interface CT_GraphicFrame {
    nvGraphicFramePr?: CT_GraphicFrameNonVisual;
    xfrm?: CT_Transform2D;
    macro?: string;
    fPublished?: boolean;
}
export declare const CT_GraphicFrame_Attributes: Attributes;
export interface CT_GroupShapeNonVisual {
    cNvPr?: CT_NonVisualDrawingProps;
    cNvGrpSpPr?: CT_NonVisualGroupDrawingShapeProps;
}
export declare const CT_GroupShapeNonVisual_Attributes: Attributes;
export type CT_GroupShape = any;
export declare const CT_GroupShape_Attributes: Attributes;
export type ST_Shape = 'cone' | 'coneToMax' | 'box' | 'cylinder' | 'pyramid' | 'pyramidToMax';
export interface CT_Shape {
    val?: ST_Shape;
}
export declare const CT_Shape_Attributes: Attributes;
export type ST_MarkerStyle = 'circle' | 'dash' | 'diamond' | 'dot' | 'none' | 'picture' | 'plus' | 'square' | 'star' | 'triangle' | 'x' | 'auto';
export interface CT_MarkerStyle {
    val?: ST_MarkerStyle;
}
export declare const CT_MarkerStyle_Attributes: Attributes;
export type ST_MarkerSize = number;
export interface CT_MarkerSize {
    val?: number;
}
export declare const CT_MarkerSize_Attributes: Attributes;
export interface CT_Marker {
    symbol?: CT_MarkerStyle;
    size?: CT_MarkerSize;
    spPr?: CT_ShapeProperties;
    extLst?: CT_ExtensionList;
}
export declare const CT_Marker_Attributes: Attributes;
export interface CT_RelSizeAnchor {
    from?: CT_Marker[];
    to?: CT_Marker[];
    sp?: CT_Shape[];
    grpSp?: CT_GroupShape[];
    graphicFrame?: CT_GraphicFrame[];
    cxnSp?: CT_Connector[];
    pic?: CT_Picture[];
}
export declare const CT_RelSizeAnchor_Attributes: Attributes;
export interface CT_AbsSizeAnchor {
    from?: CT_Marker[];
    ext?: CT_PositiveSize2D[];
    sp?: CT_Shape[];
    grpSp?: CT_GroupShape[];
    graphicFrame?: CT_GraphicFrame[];
    cxnSp?: CT_Connector[];
    pic?: CT_Picture[];
}
export declare const CT_AbsSizeAnchor_Attributes: Attributes;
export interface CT_Drawing {
    relSizeAnchor?: CT_RelSizeAnchor[];
    absSizeAnchor?: CT_AbsSizeAnchor[];
}
export declare const CT_Drawing_Attributes: Attributes;
export interface CT_Double {
    val?: number;
}
export declare const CT_Double_Attributes: Attributes;
export interface CT_UnsignedInt {
    val?: number;
}
export declare const CT_UnsignedInt_Attributes: Attributes;
export interface CT_RelId {
    'r:id'?: string;
}
export declare const CT_RelId_Attributes: Attributes;
export interface CT_NumVal {
    v?: string;
    idx?: number;
    formatCode?: string;
}
export declare const CT_NumVal_Attributes: Attributes;
export interface CT_NumData {
    formatCode?: string;
    ptCount?: CT_UnsignedInt;
    pt?: CT_NumVal[];
    extLst?: CT_ExtensionList;
}
export declare const CT_NumData_Attributes: Attributes;
export interface CT_NumRef {
    f?: string;
    numCache?: CT_NumData;
    extLst?: CT_ExtensionList;
}
export declare const CT_NumRef_Attributes: Attributes;
export interface CT_NumDataSource {
    numRef?: CT_NumRef;
    numLit?: CT_NumData;
}
export declare const CT_NumDataSource_Attributes: Attributes;
export interface CT_StrVal {
    v?: string;
    idx?: number;
}
export declare const CT_StrVal_Attributes: Attributes;
export interface CT_StrData {
    ptCount?: CT_UnsignedInt;
    pt?: CT_StrVal[];
    extLst?: CT_ExtensionList;
}
export declare const CT_StrData_Attributes: Attributes;
export interface CT_StrRef {
    f?: string;
    strCache?: CT_StrData;
    extLst?: CT_ExtensionList;
}
export declare const CT_StrRef_Attributes: Attributes;
export interface CT_Tx {
    strRef?: CT_StrRef;
    rich?: CT_TextBody;
}
export declare const CT_Tx_Attributes: Attributes;
export interface CT_TextLanguageID {
    val?: string;
}
export declare const CT_TextLanguageID_Attributes: Attributes;
export interface CT_Lvl {
    pt?: CT_StrVal[];
}
export declare const CT_Lvl_Attributes: Attributes;
export interface CT_MultiLvlStrData {
    ptCount?: CT_UnsignedInt;
    lvl?: CT_Lvl[];
    extLst?: CT_ExtensionList;
}
export declare const CT_MultiLvlStrData_Attributes: Attributes;
export interface CT_MultiLvlStrRef {
    f?: string;
    multiLvlStrCache?: CT_MultiLvlStrData;
    extLst?: CT_ExtensionList;
}
export declare const CT_MultiLvlStrRef_Attributes: Attributes;
export interface CT_AxDataSource {
    multiLvlStrRef?: CT_MultiLvlStrRef;
    numRef?: CT_NumRef;
    numLit?: CT_NumData;
    strRef?: CT_StrRef;
    strLit?: CT_StrData;
}
export declare const CT_AxDataSource_Attributes: Attributes;
export interface CT_SerTx {
    strRef?: CT_StrRef;
    v?: string;
}
export declare const CT_SerTx_Attributes: Attributes;
export type ST_LayoutTarget = 'inner' | 'outer';
export interface CT_LayoutTarget {
    val?: ST_LayoutTarget;
}
export declare const CT_LayoutTarget_Attributes: Attributes;
export type ST_LayoutMode = 'edge' | 'factor';
export interface CT_LayoutMode {
    val?: ST_LayoutMode;
}
export declare const CT_LayoutMode_Attributes: Attributes;
export interface CT_ManualLayout {
    layoutTarget?: CT_LayoutTarget;
    xMode?: CT_LayoutMode;
    yMode?: CT_LayoutMode;
    wMode?: CT_LayoutMode;
    hMode?: CT_LayoutMode;
    x?: CT_Double;
    y?: CT_Double;
    w?: CT_Double;
    h?: CT_Double;
    extLst?: CT_ExtensionList;
}
export declare const CT_ManualLayout_Attributes: Attributes;
export interface CT_Layout {
    manualLayout?: CT_ManualLayout;
    extLst?: CT_ExtensionList;
}
export declare const CT_Layout_Attributes: Attributes;
export interface CT_Title {
    tx?: CT_Tx;
    layout?: CT_Layout;
    overlay?: CT_Boolean;
    spPr?: CT_ShapeProperties;
    txPr?: CT_TextBody;
    extLst?: CT_ExtensionList;
}
export declare const CT_Title_Attributes: Attributes;
export type ST_RotX = number;
export interface CT_RotX {
    val?: number;
}
export declare const CT_RotX_Attributes: Attributes;
export type ST_HPercent = string;
export type ST_HPercentWithSymbol = string;
export interface CT_HPercent {
    val?: string;
}
export declare const CT_HPercent_Attributes: Attributes;
export type ST_RotY = number;
export interface CT_RotY {
    val?: number;
}
export declare const CT_RotY_Attributes: Attributes;
export type ST_DepthPercent = string;
export type ST_DepthPercentWithSymbol = string;
export interface CT_DepthPercent {
    val?: string;
}
export declare const CT_DepthPercent_Attributes: Attributes;
export type ST_Perspective = number;
export interface CT_Perspective {
    val?: number;
}
export declare const CT_Perspective_Attributes: Attributes;
export interface CT_View3D {
    rotX?: CT_RotX;
    hPercent?: CT_HPercent;
    rotY?: CT_RotY;
    depthPercent?: CT_DepthPercent;
    rAngAx?: CT_Boolean;
    perspective?: CT_Perspective;
    extLst?: CT_ExtensionList;
}
export declare const CT_View3D_Attributes: Attributes;
export type ST_Thickness = string;
export interface CT_Thickness {
    val?: string;
}
export declare const CT_Thickness_Attributes: Attributes;
export type ST_PictureFormat = 'stretch' | 'stack' | 'stackScale';
export interface CT_PictureFormat {
    val?: ST_PictureFormat;
}
export declare const CT_PictureFormat_Attributes: Attributes;
export type ST_PictureStackUnit = number;
export interface CT_PictureStackUnit {
    val?: number;
}
export declare const CT_PictureStackUnit_Attributes: Attributes;
export interface CT_PictureOptions {
    applyToFront?: CT_Boolean;
    applyToSides?: CT_Boolean;
    applyToEnd?: CT_Boolean;
    pictureFormat?: CT_PictureFormat;
    pictureStackUnit?: CT_PictureStackUnit;
}
export declare const CT_PictureOptions_Attributes: Attributes;
export interface CT_Surface {
    thickness?: CT_Thickness;
    spPr?: CT_ShapeProperties;
    pictureOptions?: CT_PictureOptions;
    extLst?: CT_ExtensionList;
}
export declare const CT_Surface_Attributes: Attributes;
export type ST_ThicknessPercent = string;
export interface CT_DTable {
    showHorzBorder?: CT_Boolean;
    showVertBorder?: CT_Boolean;
    showOutline?: CT_Boolean;
    showKeys?: CT_Boolean;
    spPr?: CT_ShapeProperties;
    txPr?: CT_TextBody;
    extLst?: CT_ExtensionList;
}
export declare const CT_DTable_Attributes: Attributes;
export type ST_GapAmount = string;
export type ST_GapAmountPercent = string;
export interface CT_GapAmount {
    val?: string;
}
export declare const CT_GapAmount_Attributes: Attributes;
export type ST_Overlap = string;
export type ST_OverlapPercent = string;
export interface CT_Overlap {
    val?: string;
}
export declare const CT_Overlap_Attributes: Attributes;
export type ST_BubbleScale = string;
export type ST_BubbleScalePercent = string;
export interface CT_BubbleScale {
    val?: string;
}
export declare const CT_BubbleScale_Attributes: Attributes;
export type ST_SizeRepresents = 'area' | 'w';
export interface CT_SizeRepresents {
    val?: ST_SizeRepresents;
}
export declare const CT_SizeRepresents_Attributes: Attributes;
export type ST_FirstSliceAng = number;
export interface CT_FirstSliceAng {
    val?: number;
}
export declare const CT_FirstSliceAng_Attributes: Attributes;
export type ST_HoleSize = string;
export type ST_HoleSizePercent = string;
export interface CT_HoleSize {
    val?: string;
}
export declare const CT_HoleSize_Attributes: Attributes;
export type ST_SplitType = 'auto' | 'cust' | 'percent' | 'pos' | 'val';
export interface CT_SplitType {
    val?: ST_SplitType;
}
export declare const CT_SplitType_Attributes: Attributes;
export interface CT_CustSplit {
    secondPiePt?: CT_UnsignedInt[];
}
export declare const CT_CustSplit_Attributes: Attributes;
export type ST_SecondPieSize = string;
export type ST_SecondPieSizePercent = string;
export interface CT_SecondPieSize {
    val?: string;
}
export declare const CT_SecondPieSize_Attributes: Attributes;
export interface CT_NumFmt {
    formatCode?: string;
    sourceLinked?: boolean;
}
export declare const CT_NumFmt_Attributes: Attributes;
export type ST_LblAlgn = 'ctr' | 'l' | 'r';
export interface CT_LblAlgn {
    val?: ST_LblAlgn;
}
export declare const CT_LblAlgn_Attributes: Attributes;
export type ST_DLblPos = 'bestFit' | 'b' | 'ctr' | 'inBase' | 'inEnd' | 'l' | 'outEnd' | 'r' | 't';
export interface CT_DLblPos {
    val?: ST_DLblPos;
}
export declare const CT_DLblPos_Attributes: Attributes;
export interface CT_DLbl {
    idx?: CT_UnsignedInt;
    delete?: CT_Boolean;
    extLst?: CT_ExtensionList;
}
export declare const CT_DLbl_Attributes: Attributes;
export interface CT_DLbls {
    dLbl?: CT_DLbl[];
    delete?: CT_Boolean;
    extLst?: CT_ExtensionList;
}
export declare const CT_DLbls_Attributes: Attributes;
export interface CT_DPt {
    idx?: CT_UnsignedInt;
    invertIfNegative?: CT_Boolean;
    marker?: CT_Marker;
    bubble3D?: CT_Boolean;
    explosion?: CT_UnsignedInt;
    spPr?: CT_ShapeProperties;
    pictureOptions?: CT_PictureOptions;
    extLst?: CT_ExtensionList;
}
export declare const CT_DPt_Attributes: Attributes;
export type ST_TrendlineType = 'exp' | 'linear' | 'log' | 'movingAvg' | 'poly' | 'power';
export interface CT_TrendlineType {
    val?: ST_TrendlineType;
}
export declare const CT_TrendlineType_Attributes: Attributes;
export type ST_Order = number;
export interface CT_Order {
    val?: number;
}
export declare const CT_Order_Attributes: Attributes;
export type ST_Period = number;
export interface CT_Period {
    val?: number;
}
export declare const CT_Period_Attributes: Attributes;
export interface CT_TrendlineLbl {
    layout?: CT_Layout;
    tx?: CT_Tx;
    numFmt?: CT_NumFmt;
    spPr?: CT_ShapeProperties;
    txPr?: CT_TextBody;
    extLst?: CT_ExtensionList;
}
export declare const CT_TrendlineLbl_Attributes: Attributes;
export interface CT_Trendline {
    name?: string;
    spPr?: CT_ShapeProperties;
    trendlineType?: CT_TrendlineType;
    order?: CT_Order;
    period?: CT_Period;
    forward?: CT_Double;
    backward?: CT_Double;
    intercept?: CT_Double;
    dispRSqr?: CT_Boolean;
    dispEq?: CT_Boolean;
    trendlineLbl?: CT_TrendlineLbl;
    extLst?: CT_ExtensionList;
}
export declare const CT_Trendline_Attributes: Attributes;
export type ST_ErrDir = 'x' | 'y';
export interface CT_ErrDir {
    val?: ST_ErrDir;
}
export declare const CT_ErrDir_Attributes: Attributes;
export type ST_ErrBarType = 'both' | 'minus' | 'plus';
export interface CT_ErrBarType {
    val?: ST_ErrBarType;
}
export declare const CT_ErrBarType_Attributes: Attributes;
export type ST_ErrValType = 'cust' | 'fixedVal' | 'percentage' | 'stdDev' | 'stdErr';
export interface CT_ErrValType {
    val?: ST_ErrValType;
}
export declare const CT_ErrValType_Attributes: Attributes;
export interface CT_ErrBars {
    errDir?: CT_ErrDir;
    errBarType?: CT_ErrBarType;
    errValType?: CT_ErrValType;
    noEndCap?: CT_Boolean;
    plus?: CT_NumDataSource;
    minus?: CT_NumDataSource;
    val?: CT_Double;
    spPr?: CT_ShapeProperties;
    extLst?: CT_ExtensionList;
}
export declare const CT_ErrBars_Attributes: Attributes;
export interface CT_UpDownBar {
    spPr?: CT_ShapeProperties;
}
export declare const CT_UpDownBar_Attributes: Attributes;
export interface CT_UpDownBars {
    gapWidth?: CT_GapAmount;
    upBars?: CT_UpDownBar;
    downBars?: CT_UpDownBar;
    extLst?: CT_ExtensionList;
}
export declare const CT_UpDownBars_Attributes: Attributes;
export interface CT_LineSer {
    idx?: CT_UnsignedInt;
    order?: CT_UnsignedInt;
    tx?: CT_SerTx;
    spPr?: CT_ShapeProperties;
    marker?: CT_Marker;
    dPt?: CT_DPt[];
    dLbls?: CT_DLbls;
    trendline?: CT_Trendline[];
    errBars?: CT_ErrBars;
    cat?: CT_AxDataSource;
    val?: CT_NumDataSource;
    smooth?: CT_Boolean;
    extLst?: CT_ExtensionList;
}
export declare const CT_LineSer_Attributes: Attributes;
export interface CT_ScatterSer {
    idx?: CT_UnsignedInt;
    order?: CT_UnsignedInt;
    tx?: CT_SerTx;
    spPr?: CT_ShapeProperties;
    marker?: CT_Marker;
    dPt?: CT_DPt[];
    dLbls?: CT_DLbls;
    trendline?: CT_Trendline[];
    errBars?: CT_ErrBars[];
    xVal?: CT_AxDataSource;
    yVal?: CT_NumDataSource;
    smooth?: CT_Boolean;
    extLst?: CT_ExtensionList;
}
export declare const CT_ScatterSer_Attributes: Attributes;
export interface CT_RadarSer {
    idx?: CT_UnsignedInt;
    order?: CT_UnsignedInt;
    tx?: CT_SerTx;
    spPr?: CT_ShapeProperties;
    marker?: CT_Marker;
    dPt?: CT_DPt[];
    dLbls?: CT_DLbls;
    cat?: CT_AxDataSource;
    val?: CT_NumDataSource;
    extLst?: CT_ExtensionList;
}
export declare const CT_RadarSer_Attributes: Attributes;
export interface CT_BarSer {
    idx?: CT_UnsignedInt;
    order?: CT_UnsignedInt;
    tx?: CT_SerTx;
    spPr?: CT_ShapeProperties;
    invertIfNegative?: CT_Boolean;
    pictureOptions?: CT_PictureOptions;
    dPt?: CT_DPt[];
    dLbls?: CT_DLbls;
    trendline?: CT_Trendline[];
    errBars?: CT_ErrBars;
    cat?: CT_AxDataSource;
    val?: CT_NumDataSource;
    shape?: CT_Shape;
    extLst?: CT_ExtensionList;
}
export declare const CT_BarSer_Attributes: Attributes;
export interface CT_AreaSer {
    idx?: CT_UnsignedInt;
    order?: CT_UnsignedInt;
    tx?: CT_SerTx;
    spPr?: CT_ShapeProperties;
    pictureOptions?: CT_PictureOptions;
    dPt?: CT_DPt[];
    dLbls?: CT_DLbls;
    trendline?: CT_Trendline[];
    errBars?: CT_ErrBars[];
    cat?: CT_AxDataSource;
    val?: CT_NumDataSource;
    extLst?: CT_ExtensionList;
}
export declare const CT_AreaSer_Attributes: Attributes;
export interface CT_PieSer {
    idx?: CT_UnsignedInt;
    order?: CT_UnsignedInt;
    tx?: CT_SerTx;
    spPr?: CT_ShapeProperties;
    explosion?: CT_UnsignedInt;
    dPt?: CT_DPt[];
    dLbls?: CT_DLbls;
    cat?: CT_AxDataSource;
    val?: CT_NumDataSource;
    extLst?: CT_ExtensionList;
}
export declare const CT_PieSer_Attributes: Attributes;
export interface CT_BubbleSer {
    idx?: CT_UnsignedInt;
    order?: CT_UnsignedInt;
    tx?: CT_SerTx;
    spPr?: CT_ShapeProperties;
    invertIfNegative?: CT_Boolean;
    dPt?: CT_DPt[];
    dLbls?: CT_DLbls;
    trendline?: CT_Trendline[];
    errBars?: CT_ErrBars[];
    xVal?: CT_AxDataSource;
    yVal?: CT_NumDataSource;
    bubbleSize?: CT_NumDataSource;
    bubble3D?: CT_Boolean;
    extLst?: CT_ExtensionList;
}
export declare const CT_BubbleSer_Attributes: Attributes;
export interface CT_SurfaceSer {
    idx?: CT_UnsignedInt;
    order?: CT_UnsignedInt;
    tx?: CT_SerTx;
    spPr?: CT_ShapeProperties;
    cat?: CT_AxDataSource;
    val?: CT_NumDataSource;
    extLst?: CT_ExtensionList;
}
export declare const CT_SurfaceSer_Attributes: Attributes;
export type ST_Grouping = 'percentStacked' | 'standard' | 'stacked';
export interface CT_Grouping {
    val?: ST_Grouping;
}
export declare const CT_Grouping_Attributes: Attributes;
export interface CT_ChartLines {
    spPr?: CT_ShapeProperties;
}
export declare const CT_ChartLines_Attributes: Attributes;
export interface CT_LineChart {
    grouping?: CT_Grouping;
    varyColors?: CT_Boolean;
    ser?: CT_LineSer[];
    dLbls?: CT_DLbls;
    dropLines?: CT_ChartLines;
    hiLowLines?: CT_ChartLines;
    upDownBars?: CT_UpDownBars;
    marker?: CT_Boolean;
    smooth?: CT_Boolean;
    axId?: CT_UnsignedInt[];
    extLst?: CT_ExtensionList;
}
export declare const CT_LineChart_Attributes: Attributes;
export interface CT_Line3DChart {
    grouping?: CT_Grouping;
    varyColors?: CT_Boolean;
    ser?: CT_LineSer[];
    dLbls?: CT_DLbls;
    dropLines?: CT_ChartLines;
    gapDepth?: CT_GapAmount;
    axId?: CT_UnsignedInt[];
    extLst?: CT_ExtensionList;
}
export declare const CT_Line3DChart_Attributes: Attributes;
export interface CT_StockChart {
    ser?: CT_LineSer[];
    dLbls?: CT_DLbls;
    dropLines?: CT_ChartLines;
    hiLowLines?: CT_ChartLines;
    upDownBars?: CT_UpDownBars;
    axId?: CT_UnsignedInt[];
    extLst?: CT_ExtensionList;
}
export declare const CT_StockChart_Attributes: Attributes;
export type ST_ScatterStyle = 'none' | 'line' | 'lineMarker' | 'marker' | 'smooth' | 'smoothMarker';
export interface CT_ScatterStyle {
    val?: ST_ScatterStyle;
}
export declare const CT_ScatterStyle_Attributes: Attributes;
export interface CT_ScatterChart {
    scatterStyle?: CT_ScatterStyle;
    varyColors?: CT_Boolean;
    ser?: CT_ScatterSer[];
    dLbls?: CT_DLbls;
    axId?: CT_UnsignedInt[];
    extLst?: CT_ExtensionList;
}
export declare const CT_ScatterChart_Attributes: Attributes;
export type ST_RadarStyle = 'standard' | 'marker' | 'filled';
export interface CT_RadarStyle {
    val?: ST_RadarStyle;
}
export declare const CT_RadarStyle_Attributes: Attributes;
export interface CT_RadarChart {
    radarStyle?: CT_RadarStyle;
    varyColors?: CT_Boolean;
    ser?: CT_RadarSer[];
    dLbls?: CT_DLbls;
    axId?: CT_UnsignedInt[];
    extLst?: CT_ExtensionList;
}
export declare const CT_RadarChart_Attributes: Attributes;
export type ST_BarGrouping = 'percentStacked' | 'clustered' | 'standard' | 'stacked';
export interface CT_BarGrouping {
    val?: ST_BarGrouping;
}
export declare const CT_BarGrouping_Attributes: Attributes;
export type ST_BarDir = 'bar' | 'col';
export interface CT_BarDir {
    val?: ST_BarDir;
}
export declare const CT_BarDir_Attributes: Attributes;
export interface CT_BarChart {
    barDir?: CT_BarDir;
    grouping?: CT_BarGrouping;
    varyColors?: CT_Boolean;
    ser?: CT_BarSer[];
    dLbls?: CT_DLbls;
    gapWidth?: CT_GapAmount;
    overlap?: CT_Overlap;
    serLines?: CT_ChartLines[];
    axId?: CT_UnsignedInt[];
    extLst?: CT_ExtensionList;
}
export declare const CT_BarChart_Attributes: Attributes;
export interface CT_Bar3DChart {
    barDir?: CT_BarDir;
    grouping?: CT_BarGrouping;
    varyColors?: CT_Boolean;
    ser?: CT_BarSer[];
    dLbls?: CT_DLbls;
    gapWidth?: CT_GapAmount;
    gapDepth?: CT_GapAmount;
    shape?: CT_Shape;
    axId?: CT_UnsignedInt[];
    extLst?: CT_ExtensionList;
}
export declare const CT_Bar3DChart_Attributes: Attributes;
export interface CT_AreaChart {
    grouping?: CT_Grouping;
    varyColors?: CT_Boolean;
    ser?: CT_AreaSer[];
    dLbls?: CT_DLbls;
    dropLines?: CT_ChartLines;
    axId?: CT_UnsignedInt[];
    extLst?: CT_ExtensionList;
}
export declare const CT_AreaChart_Attributes: Attributes;
export interface CT_Area3DChart {
    grouping?: CT_Grouping;
    varyColors?: CT_Boolean;
    ser?: CT_AreaSer[];
    dLbls?: CT_DLbls;
    dropLines?: CT_ChartLines;
    gapDepth?: CT_GapAmount;
    axId?: CT_UnsignedInt[];
    extLst?: CT_ExtensionList;
}
export declare const CT_Area3DChart_Attributes: Attributes;
export interface CT_PieChart {
    varyColors?: CT_Boolean;
    ser?: CT_PieSer[];
    dLbls?: CT_DLbls;
    firstSliceAng?: CT_FirstSliceAng;
    extLst?: CT_ExtensionList;
}
export declare const CT_PieChart_Attributes: Attributes;
export interface CT_Pie3DChart {
    varyColors?: CT_Boolean;
    ser?: CT_PieSer[];
    dLbls?: CT_DLbls;
    extLst?: CT_ExtensionList;
}
export declare const CT_Pie3DChart_Attributes: Attributes;
export interface CT_DoughnutChart {
    varyColors?: CT_Boolean;
    ser?: CT_PieSer[];
    dLbls?: CT_DLbls;
    firstSliceAng?: CT_FirstSliceAng;
    holeSize?: CT_HoleSize;
    extLst?: CT_ExtensionList;
}
export declare const CT_DoughnutChart_Attributes: Attributes;
export type ST_OfPieType = 'pie' | 'bar';
export interface CT_OfPieType {
    val?: ST_OfPieType;
}
export declare const CT_OfPieType_Attributes: Attributes;
export interface CT_OfPieChart {
    ofPieType?: CT_OfPieType;
    varyColors?: CT_Boolean;
    ser?: CT_PieSer[];
    dLbls?: CT_DLbls;
    gapWidth?: CT_GapAmount;
    splitType?: CT_SplitType;
    splitPos?: CT_Double;
    custSplit?: CT_CustSplit;
    secondPieSize?: CT_SecondPieSize;
    serLines?: CT_ChartLines[];
    extLst?: CT_ExtensionList;
}
export declare const CT_OfPieChart_Attributes: Attributes;
export interface CT_BubbleChart {
    varyColors?: CT_Boolean;
    ser?: CT_BubbleSer[];
    dLbls?: CT_DLbls;
    bubble3D?: CT_Boolean;
    bubbleScale?: CT_BubbleScale;
    showNegBubbles?: CT_Boolean;
    sizeRepresents?: CT_SizeRepresents;
    axId?: CT_UnsignedInt[];
    extLst?: CT_ExtensionList;
}
export declare const CT_BubbleChart_Attributes: Attributes;
export interface CT_BandFmt {
    idx?: CT_UnsignedInt;
    spPr?: CT_ShapeProperties;
}
export declare const CT_BandFmt_Attributes: Attributes;
export interface CT_BandFmts {
    bandFmt?: CT_BandFmt[];
}
export declare const CT_BandFmts_Attributes: Attributes;
export interface CT_SurfaceChart {
    wireframe?: CT_Boolean;
    ser?: CT_SurfaceSer[];
    bandFmts?: CT_BandFmts;
    axId?: CT_UnsignedInt[];
    extLst?: CT_ExtensionList;
}
export declare const CT_SurfaceChart_Attributes: Attributes;
export interface CT_Surface3DChart {
    wireframe?: CT_Boolean;
    ser?: CT_SurfaceSer[];
    bandFmts?: CT_BandFmts;
    axId?: CT_UnsignedInt[];
    extLst?: CT_ExtensionList;
}
export declare const CT_Surface3DChart_Attributes: Attributes;
export type ST_AxPos = 'b' | 'l' | 'r' | 't';
export interface CT_AxPos {
    val?: ST_AxPos;
}
export declare const CT_AxPos_Attributes: Attributes;
export type ST_Crosses = 'autoZero' | 'max' | 'min';
export interface CT_Crosses {
    val?: ST_Crosses;
}
export declare const CT_Crosses_Attributes: Attributes;
export type ST_CrossBetween = 'between' | 'midCat';
export interface CT_CrossBetween {
    val?: ST_CrossBetween;
}
export declare const CT_CrossBetween_Attributes: Attributes;
export type ST_TickMark = 'cross' | 'in' | 'none' | 'out';
export interface CT_TickMark {
    val?: ST_TickMark;
}
export declare const CT_TickMark_Attributes: Attributes;
export type ST_TickLblPos = 'high' | 'low' | 'nextTo' | 'none';
export interface CT_TickLblPos {
    val?: ST_TickLblPos;
}
export declare const CT_TickLblPos_Attributes: Attributes;
export type ST_Skip = number;
export interface CT_Skip {
    val?: number;
}
export declare const CT_Skip_Attributes: Attributes;
export type ST_TimeUnit = 'days' | 'months' | 'years';
export interface CT_TimeUnit {
    val?: ST_TimeUnit;
}
export declare const CT_TimeUnit_Attributes: Attributes;
export type ST_AxisUnit = number;
export interface CT_AxisUnit {
    val?: number;
}
export declare const CT_AxisUnit_Attributes: Attributes;
export type ST_BuiltInUnit = 'hundreds' | 'thousands' | 'tenThousands' | 'hundredThousands' | 'millions' | 'tenMillions' | 'hundredMillions' | 'billions' | 'trillions';
export interface CT_BuiltInUnit {
    val?: ST_BuiltInUnit;
}
export declare const CT_BuiltInUnit_Attributes: Attributes;
export interface CT_DispUnitsLbl {
    layout?: CT_Layout;
    tx?: CT_Tx;
    spPr?: CT_ShapeProperties;
    txPr?: CT_TextBody;
}
export declare const CT_DispUnitsLbl_Attributes: Attributes;
export interface CT_DispUnits {
    custUnit?: CT_Double;
    builtInUnit?: CT_BuiltInUnit;
    dispUnitsLbl?: CT_DispUnitsLbl;
    extLst?: CT_ExtensionList;
}
export declare const CT_DispUnits_Attributes: Attributes;
export type ST_Orientation = 'maxMin' | 'minMax';
export interface CT_Orientation {
    val?: ST_Orientation;
}
export declare const CT_Orientation_Attributes: Attributes;
export type ST_LogBase = number;
export interface CT_LogBase {
    val?: number;
}
export declare const CT_LogBase_Attributes: Attributes;
export interface CT_Scaling {
    logBase?: CT_LogBase;
    orientation?: CT_Orientation;
    max?: CT_Double;
    min?: CT_Double;
    extLst?: CT_ExtensionList;
}
export declare const CT_Scaling_Attributes: Attributes;
export type ST_LblOffset = string;
export type ST_LblOffsetPercent = string;
export interface CT_LblOffset {
    val?: string;
}
export declare const CT_LblOffset_Attributes: Attributes;
export interface CT_CatAx {
    axId?: CT_UnsignedInt;
    scaling?: CT_Scaling;
    delete?: CT_Boolean;
    axPos?: CT_AxPos;
    majorGridlines?: CT_ChartLines;
    minorGridlines?: CT_ChartLines;
    title?: CT_Title;
    numFmt?: CT_NumFmt;
    majorTickMark?: CT_TickMark;
    minorTickMark?: CT_TickMark;
    tickLblPos?: CT_TickLblPos;
    spPr?: CT_ShapeProperties;
    txPr?: CT_TextBody;
    crossAx?: CT_UnsignedInt;
    crosses?: CT_Crosses;
    crossesAt?: CT_Double;
    auto?: CT_Boolean;
    lblAlgn?: CT_LblAlgn;
    lblOffset?: CT_LblOffset;
    tickLblSkip?: CT_Skip;
    tickMarkSkip?: CT_Skip;
    noMultiLvlLbl?: CT_Boolean;
    extLst?: CT_ExtensionList;
}
export declare const CT_CatAx_Attributes: Attributes;
export interface CT_DateAx {
    axId?: CT_UnsignedInt;
    scaling?: CT_Scaling;
    delete?: CT_Boolean;
    axPos?: CT_AxPos;
    majorGridlines?: CT_ChartLines;
    minorGridlines?: CT_ChartLines;
    title?: CT_Title;
    numFmt?: CT_NumFmt;
    majorTickMark?: CT_TickMark;
    minorTickMark?: CT_TickMark;
    tickLblPos?: CT_TickLblPos;
    spPr?: CT_ShapeProperties;
    txPr?: CT_TextBody;
    crossAx?: CT_UnsignedInt;
    crosses?: CT_Crosses;
    crossesAt?: CT_Double;
    auto?: CT_Boolean;
    lblOffset?: CT_LblOffset;
    baseTimeUnit?: CT_TimeUnit;
    majorUnit?: CT_AxisUnit;
    majorTimeUnit?: CT_TimeUnit;
    minorUnit?: CT_AxisUnit;
    minorTimeUnit?: CT_TimeUnit;
    extLst?: CT_ExtensionList;
}
export declare const CT_DateAx_Attributes: Attributes;
export interface CT_SerAx {
    axId?: CT_UnsignedInt;
    scaling?: CT_Scaling;
    delete?: CT_Boolean;
    axPos?: CT_AxPos;
    majorGridlines?: CT_ChartLines;
    minorGridlines?: CT_ChartLines;
    title?: CT_Title;
    numFmt?: CT_NumFmt;
    majorTickMark?: CT_TickMark;
    minorTickMark?: CT_TickMark;
    tickLblPos?: CT_TickLblPos;
    spPr?: CT_ShapeProperties;
    txPr?: CT_TextBody;
    crossAx?: CT_UnsignedInt;
    crosses?: CT_Crosses;
    crossesAt?: CT_Double;
    tickLblSkip?: CT_Skip;
    tickMarkSkip?: CT_Skip;
    extLst?: CT_ExtensionList;
}
export declare const CT_SerAx_Attributes: Attributes;
export interface CT_ValAx {
    axId?: CT_UnsignedInt;
    scaling?: CT_Scaling;
    delete?: CT_Boolean;
    axPos?: CT_AxPos;
    majorGridlines?: CT_ChartLines;
    minorGridlines?: CT_ChartLines;
    title?: CT_Title;
    numFmt?: CT_NumFmt;
    majorTickMark?: CT_TickMark;
    minorTickMark?: CT_TickMark;
    tickLblPos?: CT_TickLblPos;
    spPr?: CT_ShapeProperties;
    txPr?: CT_TextBody;
    crossAx?: CT_UnsignedInt;
    crosses?: CT_Crosses;
    crossesAt?: CT_Double;
    crossBetween?: CT_CrossBetween;
    majorUnit?: CT_AxisUnit;
    minorUnit?: CT_AxisUnit;
    dispUnits?: CT_DispUnits;
    extLst?: CT_ExtensionList;
}
export declare const CT_ValAx_Attributes: Attributes;
export interface CT_PlotArea {
    layout?: CT_Layout;
    areaChart?: CT_AreaChart;
    area3DChart?: CT_Area3DChart;
    lineChart?: CT_LineChart;
    line3DChart?: CT_Line3DChart;
    stockChart?: CT_StockChart;
    radarChart?: CT_RadarChart;
    scatterChart?: CT_ScatterChart;
    pieChart?: CT_PieChart;
    pie3DChart?: CT_Pie3DChart;
    doughnutChart?: CT_DoughnutChart;
    barChart?: CT_BarChart;
    bar3DChart?: CT_Bar3DChart;
    ofPieChart?: CT_OfPieChart;
    surfaceChart?: CT_SurfaceChart;
    surface3DChart?: CT_Surface3DChart;
    bubbleChart?: CT_BubbleChart;
    valAx?: CT_ValAx;
    catAx?: CT_CatAx;
    dateAx?: CT_DateAx;
    serAx?: CT_SerAx;
    dTable?: CT_DTable;
    spPr?: CT_ShapeProperties;
    extLst?: CT_ExtensionList;
}
export declare const CT_PlotArea_Attributes: Attributes;
export interface CT_PivotFmt {
    idx?: CT_UnsignedInt;
    spPr?: CT_ShapeProperties;
    txPr?: CT_TextBody;
    marker?: CT_Marker;
    dLbl?: CT_DLbl;
    extLst?: CT_ExtensionList;
}
export declare const CT_PivotFmt_Attributes: Attributes;
export interface CT_PivotFmts {
    pivotFmt?: CT_PivotFmt[];
}
export declare const CT_PivotFmts_Attributes: Attributes;
export type ST_LegendPos = 'b' | 'tr' | 'l' | 'r' | 't';
export interface CT_LegendPos {
    val?: ST_LegendPos;
}
export declare const CT_LegendPos_Attributes: Attributes;
export interface CT_LegendEntry {
    idx?: CT_UnsignedInt;
    delete?: CT_Boolean;
    extLst?: CT_ExtensionList;
}
export declare const CT_LegendEntry_Attributes: Attributes;
export interface CT_Legend {
    legendPos?: CT_LegendPos;
    legendEntry?: CT_LegendEntry[];
    layout?: CT_Layout;
    overlay?: CT_Boolean;
    spPr?: CT_ShapeProperties;
    txPr?: CT_TextBody;
    extLst?: CT_ExtensionList;
}
export declare const CT_Legend_Attributes: Attributes;
export type ST_DispBlanksAs = 'span' | 'gap' | 'zero';
export interface CT_DispBlanksAs {
    val?: ST_DispBlanksAs;
}
export declare const CT_DispBlanksAs_Attributes: Attributes;
export interface CT_Chart {
    title?: CT_Title;
    autoTitleDeleted?: CT_Boolean;
    pivotFmts?: CT_PivotFmts;
    view3D?: CT_View3D;
    floor?: CT_Surface;
    sideWall?: CT_Surface;
    backWall?: CT_Surface;
    plotArea?: CT_PlotArea;
    legend?: CT_Legend;
    plotVisOnly?: CT_Boolean;
    dispBlanksAs?: CT_DispBlanksAs;
    showDLblsOverMax?: CT_Boolean;
    extLst?: CT_ExtensionList;
}
export declare const CT_Chart_Attributes: Attributes;
export type ST_Style = number;
export interface CT_Style {
    val?: number;
}
export declare const CT_Style_Attributes: Attributes;
export interface CT_PivotSource {
    name?: string;
    fmtId?: CT_UnsignedInt;
    extLst?: CT_ExtensionList[];
}
export declare const CT_PivotSource_Attributes: Attributes;
export interface CT_Protection {
    chartObject?: CT_Boolean;
    data?: CT_Boolean;
    formatting?: CT_Boolean;
    selection?: CT_Boolean;
    userInterface?: CT_Boolean;
}
export declare const CT_Protection_Attributes: Attributes;
export interface CT_HeaderFooter {
    oddHeader?: string;
    oddFooter?: string;
    evenHeader?: string;
    evenFooter?: string;
    firstHeader?: string;
    firstFooter?: string;
    alignWithMargins?: boolean;
    differentOddEven?: boolean;
    differentFirst?: boolean;
}
export declare const CT_HeaderFooter_Attributes: Attributes;
export interface CT_PageMargins {
    l?: number;
    r?: number;
    t?: number;
    b?: number;
    header?: number;
    footer?: number;
}
export declare const CT_PageMargins_Attributes: Attributes;
export type ST_PageSetupOrientation = 'default' | 'portrait' | 'landscape';
export interface CT_ExternalData {
    'autoUpdate'?: CT_Boolean;
    'r:id'?: string;
}
export declare const CT_ExternalData_Attributes: Attributes;
export interface CT_PageSetup {
    paperSize?: number;
    paperHeight?: string;
    paperWidth?: string;
    firstPageNumber?: number;
    orientation?: ST_PageSetupOrientation;
    blackAndWhite?: boolean;
    draft?: boolean;
    useFirstPageNumber?: boolean;
    horizontalDpi?: number;
    verticalDpi?: number;
    copies?: number;
}
export declare const CT_PageSetup_Attributes: Attributes;
export interface CT_PrintSettings {
    headerFooter?: CT_HeaderFooter;
    pageMargins?: CT_PageMargins;
    pageSetup?: CT_PageSetup;
}
export declare const CT_PrintSettings_Attributes: Attributes;
export interface CT_ChartSpace {
    date1904?: CT_Boolean;
    lang?: CT_TextLanguageID;
    roundedCorners?: CT_Boolean;
    style?: CT_Style;
    clrMapOvr?: CT_ColorMapping;
    pivotSource?: CT_PivotSource;
    protection?: CT_Protection;
    chart?: CT_Chart;
    spPr?: CT_ShapeProperties;
    txPr?: CT_TextBody;
    externalData?: CT_ExternalData;
    printSettings?: CT_PrintSettings;
    userShapes?: CT_RelId;
    extLst?: CT_ExtensionList;
}
export declare const CT_ChartSpace_Attributes: Attributes;
