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
export interface CT_Color {
    auto?: boolean;
    indexed?: number;
    rgb?: string;
    theme?: number;
    tint?: number;
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
    color?: CT_Color;
    position?: number;
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
export interface CT_BlipFillProperties {
    blip?: CT_Blip;
    srcRect?: CT_RelativeRect;
    tile?: CT_TileInfoProperties;
    stretch?: CT_StretchInfoProperties;
    dpi?: number;
    rotWithShape?: boolean;
}
export declare const CT_BlipFillProperties_Attributes: Attributes;
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
export type ST_FontScheme = 'none' | 'major' | 'minor';
export interface CT_FontScheme {
    val?: ST_FontScheme;
}
export declare const CT_FontScheme_Attributes: Attributes;
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
export type ST_Ref = string;
export interface CT_Hyperlink {
    'ref'?: string;
    'r:id'?: string;
    'location'?: string;
    'tooltip'?: string;
    'display'?: string;
}
export declare const CT_Hyperlink_Attributes: Attributes;
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
export interface CT_DbPr {
    connection?: string;
    command?: string;
    serverCommand?: string;
    commandType?: number;
}
export declare const CT_DbPr_Attributes: Attributes;
export interface CT_OlapPr {
    local?: boolean;
    localConnection?: string;
    localRefresh?: boolean;
    sendLocale?: boolean;
    rowDrillCount?: number;
    serverFill?: boolean;
    serverNumberFormat?: boolean;
    serverFont?: boolean;
    serverFontColor?: boolean;
}
export declare const CT_OlapPr_Attributes: Attributes;
export interface CT_TableMissing {
}
export declare const CT_TableMissing_Attributes: Attributes;
export interface CT_XStringElement {
    v?: string;
}
export declare const CT_XStringElement_Attributes: Attributes;
export interface CT_Index {
    v?: number;
}
export declare const CT_Index_Attributes: Attributes;
export interface CT_Tables {
    m?: CT_TableMissing[];
    s?: CT_XStringElement[];
    x?: CT_Index[];
    count?: number;
}
export declare const CT_Tables_Attributes: Attributes;
export type ST_HtmlFmt = 'none' | 'rtf' | 'all';
export interface CT_WebPr {
    tables?: CT_Tables;
    xml?: boolean;
    sourceData?: boolean;
    parsePre?: boolean;
    consecutive?: boolean;
    firstRow?: boolean;
    xl97?: boolean;
    textDates?: boolean;
    xl2000?: boolean;
    url?: string;
    post?: string;
    htmlTables?: boolean;
    htmlFormat?: ST_HtmlFmt;
    editPage?: string;
}
export declare const CT_WebPr_Attributes: Attributes;
export type ST_ExternalConnectionType = 'general' | 'text' | 'MDY' | 'DMY' | 'YMD' | 'MYD' | 'DYM' | 'YDM' | 'skip' | 'EMD';
export interface CT_TextField {
    type?: ST_ExternalConnectionType;
    position?: number;
}
export declare const CT_TextField_Attributes: Attributes;
export interface CT_TextFields {
    textField?: CT_TextField[];
    count?: number;
}
export declare const CT_TextFields_Attributes: Attributes;
export type ST_FileType = 'mac' | 'win' | 'dos' | 'lin' | 'other';
export type ST_Qualifier = 'doubleQuote' | 'singleQuote' | 'none';
export interface CT_TextPr {
    textFields?: CT_TextFields;
    prompt?: boolean;
    fileType?: ST_FileType;
    characterSet?: string;
    firstRow?: number;
    sourceFile?: string;
    delimited?: boolean;
    decimal?: string;
    thousands?: string;
    tab?: boolean;
    space?: boolean;
    comma?: boolean;
    semicolon?: boolean;
    consecutive?: boolean;
    qualifier?: ST_Qualifier;
    delimiter?: string;
}
export declare const CT_TextPr_Attributes: Attributes;
export type ST_ParameterType = 'prompt' | 'value' | 'cell';
export interface CT_Parameter {
    name?: string;
    sqlType?: number;
    parameterType?: ST_ParameterType;
    refreshOnChange?: boolean;
    prompt?: string;
    boolean?: boolean;
    double?: number;
    integer?: number;
    string?: string;
    cell?: string;
}
export declare const CT_Parameter_Attributes: Attributes;
export interface CT_Parameters {
    parameter?: CT_Parameter[];
    count?: number;
}
export declare const CT_Parameters_Attributes: Attributes;
export type ST_CredMethod = 'integrated' | 'none' | 'stored' | 'prompt';
export interface CT_Connection {
    dbPr?: CT_DbPr;
    olapPr?: CT_OlapPr;
    webPr?: CT_WebPr;
    textPr?: CT_TextPr;
    parameters?: CT_Parameters;
    extLst?: CT_ExtensionList;
    id?: number;
    sourceFile?: string;
    odcFile?: string;
    keepAlive?: boolean;
    interval?: number;
    name?: string;
    description?: string;
    type?: number;
    reconnectionMethod?: number;
    refreshedVersion?: number;
    minRefreshableVersion?: number;
    savePassword?: boolean;
    new?: boolean;
    deleted?: boolean;
    onlyUseConnectionFile?: boolean;
    background?: boolean;
    refreshOnLoad?: boolean;
    saveData?: boolean;
    credentials?: ST_CredMethod;
    singleSignOnId?: string;
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
export interface CT_X {
    v?: number;
}
export declare const CT_X_Attributes: Attributes;
export interface CT_Boolean {
    x?: CT_X[];
    v?: boolean;
    u?: boolean;
    f?: boolean;
    c?: string;
    cp?: number;
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
export type ST_TableStyleType = 'wholeTable' | 'headerRow' | 'totalRow' | 'firstColumn' | 'lastColumn' | 'firstRowStripe' | 'secondRowStripe' | 'firstColumnStripe' | 'secondColumnStripe' | 'firstHeaderCell' | 'lastHeaderCell' | 'firstTotalCell' | 'lastTotalCell' | 'firstSubtotalColumn' | 'secondSubtotalColumn' | 'thirdSubtotalColumn' | 'firstSubtotalRow' | 'secondSubtotalRow' | 'thirdSubtotalRow' | 'blankRow' | 'firstColumnSubheading' | 'secondColumnSubheading' | 'thirdColumnSubheading' | 'firstRowSubheading' | 'secondRowSubheading' | 'thirdRowSubheading' | 'pageFieldLabels' | 'pageFieldValues';
export type ST_DxfId = number;
export interface CT_TableStyleElement {
    type?: ST_TableStyleType;
    size?: number;
    dxfId?: number;
}
export declare const CT_TableStyleElement_Attributes: Attributes;
export interface CT_TableStyle {
    tableStyleElement?: CT_TableStyleElement[];
    name?: string;
    pivot?: boolean;
    table?: boolean;
    count?: number;
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
export interface CT_ThemeableLineStyle {
    ln?: CT_LineProperties;
    lnRef?: CT_StyleMatrixReference;
}
export declare const CT_ThemeableLineStyle_Attributes: Attributes;
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
export interface CT_TableBackgroundStyle {
    fill?: CT_FillProperties;
    fillRef?: CT_StyleMatrixReference;
    effect?: CT_EffectProperties;
    effectRef?: CT_StyleMatrixReference;
}
export declare const CT_TableBackgroundStyle_Attributes: Attributes;
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
export interface CT_TableStyleList {
    tblStyle?: CT_TableStyle[];
    def?: string;
}
export declare const CT_TableStyleList_Attributes: Attributes;
export type ST_TextBulletSize = string;
export type ST_TextPointUnqualified = number;
export interface CT_AnchorClientData {
    fLocksWithSheet?: boolean;
    fPrintsWithSheet?: boolean;
}
export declare const CT_AnchorClientData_Attributes: Attributes;
export interface CT_ShapeNonVisual {
    cNvPr?: CT_NonVisualDrawingProps;
    cNvSpPr?: CT_NonVisualDrawingShapeProps;
}
export declare const CT_ShapeNonVisual_Attributes: Attributes;
export interface CT_Shape {
    nvSpPr?: CT_ShapeNonVisual;
    spPr?: CT_ShapeProperties;
    style?: CT_ShapeStyle;
    txBody?: CT_TextBody;
    macro?: string;
    textlink?: string;
    fLocksText?: boolean;
    fPublished?: boolean;
}
export declare const CT_Shape_Attributes: Attributes;
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
export interface CT_GraphicalObjectFrameNonVisual {
    cNvPr?: CT_NonVisualDrawingProps;
    cNvGraphicFramePr?: CT_NonVisualGraphicFrameProperties;
}
export declare const CT_GraphicalObjectFrameNonVisual_Attributes: Attributes;
export interface CT_GraphicalObjectFrame {
    nvGraphicFramePr?: CT_GraphicalObjectFrameNonVisual;
    xfrm?: CT_Transform2D;
    macro?: string;
    fPublished?: boolean;
}
export declare const CT_GraphicalObjectFrame_Attributes: Attributes;
export interface CT_GroupShapeNonVisual {
    cNvPr?: CT_NonVisualDrawingProps;
    cNvGrpSpPr?: CT_NonVisualGroupDrawingShapeProps;
}
export declare const CT_GroupShapeNonVisual_Attributes: Attributes;
export type CT_GroupShape = any;
export declare const CT_GroupShape_Attributes: Attributes;
export interface CT_Rel {
    'r:id'?: string;
}
export declare const CT_Rel_Attributes: Attributes;
export type ST_ColID = number;
export type ST_RowID = number;
export interface CT_Marker {
    col?: number[];
    colOff?: string[];
    row?: number[];
    rowOff?: string[];
}
export declare const CT_Marker_Attributes: Attributes;
export type ST_EditAs = 'twoCell' | 'oneCell' | 'absolute';
export interface CT_TwoCellAnchor {
    from?: CT_Marker[];
    to?: CT_Marker[];
    sp?: CT_Shape[];
    grpSp?: CT_GroupShape[];
    graphicFrame?: CT_GraphicalObjectFrame[];
    cxnSp?: CT_Connector[];
    pic?: CT_Picture[];
    contentPart?: CT_Rel[];
    clientData?: CT_AnchorClientData;
    editAs?: ST_EditAs;
}
export declare const CT_TwoCellAnchor_Attributes: Attributes;
export interface CT_OneCellAnchor {
    from?: CT_Marker[];
    ext?: CT_PositiveSize2D[];
    sp?: CT_Shape[];
    grpSp?: CT_GroupShape[];
    graphicFrame?: CT_GraphicalObjectFrame[];
    cxnSp?: CT_Connector[];
    pic?: CT_Picture[];
    contentPart?: CT_Rel[];
    clientData?: CT_AnchorClientData;
}
export declare const CT_OneCellAnchor_Attributes: Attributes;
export interface CT_AbsoluteAnchor {
    pos?: CT_Point2D[];
    ext?: CT_PositiveSize2D[];
    sp?: CT_Shape[];
    grpSp?: CT_GroupShape[];
    graphicFrame?: CT_GraphicalObjectFrame[];
    cxnSp?: CT_Connector[];
    pic?: CT_Picture[];
    contentPart?: CT_Rel[];
    clientData?: CT_AnchorClientData;
}
export declare const CT_AbsoluteAnchor_Attributes: Attributes;
export interface CT_Filter {
    val?: string;
}
export declare const CT_Filter_Attributes: Attributes;
export type ST_DateTimeGrouping = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second';
export interface CT_DateGroupItem {
    year?: number;
    month?: number;
    day?: number;
    hour?: number;
    minute?: number;
    second?: number;
    dateTimeGrouping?: ST_DateTimeGrouping;
}
export declare const CT_DateGroupItem_Attributes: Attributes;
export interface CT_Filters {
    filter?: CT_Filter[];
    dateGroupItem?: CT_DateGroupItem[];
    blank?: boolean;
    calendarType?: ST_CalendarType;
}
export declare const CT_Filters_Attributes: Attributes;
export interface CT_Top10 {
    top?: boolean;
    percent?: boolean;
    val?: number;
    filterVal?: number;
}
export declare const CT_Top10_Attributes: Attributes;
export type ST_FilterOperator = 'equal' | 'lessThan' | 'lessThanOrEqual' | 'notEqual' | 'greaterThanOrEqual' | 'greaterThan';
export interface CT_CustomFilter {
    operator?: ST_FilterOperator;
    val?: string;
}
export declare const CT_CustomFilter_Attributes: Attributes;
export interface CT_CustomFilters {
    customFilter?: CT_CustomFilter[];
    and?: boolean;
}
export declare const CT_CustomFilters_Attributes: Attributes;
export type ST_DynamicFilterType = 'null' | 'aboveAverage' | 'belowAverage' | 'tomorrow' | 'today' | 'yesterday' | 'nextWeek' | 'thisWeek' | 'lastWeek' | 'nextMonth' | 'thisMonth' | 'lastMonth' | 'nextQuarter' | 'thisQuarter' | 'lastQuarter' | 'nextYear' | 'thisYear' | 'lastYear' | 'yearToDate' | 'Q1' | 'Q2' | 'Q3' | 'Q4' | 'M1' | 'M2' | 'M3' | 'M4' | 'M5' | 'M6' | 'M7' | 'M8' | 'M9' | 'M10' | 'M11' | 'M12';
export interface CT_DynamicFilter {
    type?: ST_DynamicFilterType;
    val?: number;
    valIso?: string;
    maxValIso?: string;
}
export declare const CT_DynamicFilter_Attributes: Attributes;
export interface CT_ColorFilter {
    dxfId?: number;
    cellColor?: boolean;
}
export declare const CT_ColorFilter_Attributes: Attributes;
export type ST_IconSetType = '3Arrows' | '3ArrowsGray' | '3Flags' | '3TrafficLights1' | '3TrafficLights2' | '3Signs' | '3Symbols' | '3Symbols2' | '4Arrows' | '4ArrowsGray' | '4RedToBlack' | '4Rating' | '4TrafficLights' | '5Arrows' | '5ArrowsGray' | '5Rating' | '5Quarters';
export interface CT_IconFilter {
    iconSet?: ST_IconSetType;
    iconId?: number;
}
export declare const CT_IconFilter_Attributes: Attributes;
export interface CT_FilterColumn {
    filters?: CT_Filters;
    top10?: CT_Top10;
    customFilters?: CT_CustomFilters;
    dynamicFilter?: CT_DynamicFilter;
    colorFilter?: CT_ColorFilter;
    iconFilter?: CT_IconFilter;
    extLst?: CT_ExtensionList;
    colId?: number;
    hiddenButton?: boolean;
    showButton?: boolean;
}
export declare const CT_FilterColumn_Attributes: Attributes;
export type ST_SortBy = 'value' | 'cellColor' | 'fontColor' | 'icon';
export interface CT_SortCondition {
    descending?: boolean;
    sortBy?: ST_SortBy;
    ref?: string;
    customList?: string;
    dxfId?: number;
    iconSet?: ST_IconSetType;
    iconId?: number;
}
export declare const CT_SortCondition_Attributes: Attributes;
export type ST_SortMethod = 'stroke' | 'pinYin' | 'none';
export interface CT_SortState {
    sortCondition?: CT_SortCondition[];
    extLst?: CT_ExtensionList;
    columnSort?: boolean;
    caseSensitive?: boolean;
    sortMethod?: ST_SortMethod;
    ref?: string;
}
export declare const CT_SortState_Attributes: Attributes;
export interface CT_AutoFilter {
    filterColumn?: CT_FilterColumn[];
    sortState?: CT_SortState;
    extLst?: CT_ExtensionList;
    ref?: string;
}
export declare const CT_AutoFilter_Attributes: Attributes;
export type ST_CellRef = string;
export type ST_RefA = string;
export type ST_Sqref = ST_Ref[];
export type ST_Formula = string;
export type ST_UnsignedIntHex = string;
export interface CT_ObjectAnchor {
    moveWithCells?: boolean;
    sizeWithCells?: boolean;
}
export declare const CT_ObjectAnchor_Attributes: Attributes;
export interface CT_CalcCell {
    r?: string;
    i?: number;
    s?: boolean;
    l?: boolean;
    t?: boolean;
    a?: boolean;
}
export declare const CT_CalcCell_Attributes: Attributes;
export interface CT_CalcChain {
    c?: CT_CalcCell[];
    extLst?: CT_ExtensionList[];
}
export declare const CT_CalcChain_Attributes: Attributes;
export interface CT_Authors {
    author?: string[];
}
export declare const CT_Authors_Attributes: Attributes;
export interface CT_FontName {
    val?: string;
}
export declare const CT_FontName_Attributes: Attributes;
export interface CT_IntProperty {
    val?: number;
}
export declare const CT_IntProperty_Attributes: Attributes;
export interface CT_BooleanProperty {
    val?: boolean;
}
export declare const CT_BooleanProperty_Attributes: Attributes;
export interface CT_FontSize {
    val?: number;
}
export declare const CT_FontSize_Attributes: Attributes;
export type ST_UnderlineValues = 'single' | 'double' | 'singleAccounting' | 'doubleAccounting' | 'none';
export interface CT_UnderlineProperty {
    val?: ST_UnderlineValues;
}
export declare const CT_UnderlineProperty_Attributes: Attributes;
export interface CT_VerticalAlignFontProperty {
    val?: ST_VerticalAlignRun;
}
export declare const CT_VerticalAlignFontProperty_Attributes: Attributes;
export interface CT_RPrElt {
    rFont?: CT_FontName;
    charset?: CT_IntProperty;
    family?: CT_IntProperty;
    b?: CT_BooleanProperty;
    i?: CT_BooleanProperty;
    strike?: CT_BooleanProperty;
    outline?: CT_BooleanProperty;
    shadow?: CT_BooleanProperty;
    condense?: CT_BooleanProperty;
    extend?: CT_BooleanProperty;
    color?: CT_Color;
    sz?: CT_FontSize;
    u?: CT_UnderlineProperty;
    vertAlign?: CT_VerticalAlignFontProperty;
    scheme?: CT_FontScheme;
}
export declare const CT_RPrElt_Attributes: Attributes;
export interface CT_RElt {
    rPr?: CT_RPrElt;
    t?: string;
}
export declare const CT_RElt_Attributes: Attributes;
export interface CT_PhoneticRun {
    t?: string;
    sb?: number;
    eb?: number;
}
export declare const CT_PhoneticRun_Attributes: Attributes;
export type ST_FontId = number;
export type ST_PhoneticType = 'halfwidthKatakana' | 'fullwidthKatakana' | 'Hiragana' | 'noConversion';
export type ST_PhoneticAlignment = 'noControl' | 'left' | 'center' | 'distributed';
export interface CT_PhoneticPr {
    fontId?: number;
    type?: ST_PhoneticType;
    alignment?: ST_PhoneticAlignment;
}
export declare const CT_PhoneticPr_Attributes: Attributes;
export interface CT_Rst {
    t?: string;
    r?: CT_RElt[];
    rPh?: CT_PhoneticRun[];
    phoneticPr?: CT_PhoneticPr;
}
export declare const CT_Rst_Attributes: Attributes;
export type ST_TextHAlign = 'left' | 'center' | 'right' | 'justify' | 'distributed';
export type ST_TextVAlign = 'top' | 'center' | 'bottom' | 'justify' | 'distributed';
export interface CT_CommentPr {
    anchor?: CT_ObjectAnchor;
    locked?: boolean;
    defaultSize?: boolean;
    print?: boolean;
    disabled?: boolean;
    autoFill?: boolean;
    autoLine?: boolean;
    altText?: string;
    textHAlign?: ST_TextHAlign;
    textVAlign?: ST_TextVAlign;
    lockText?: boolean;
    justLastX?: boolean;
    autoScale?: boolean;
}
export declare const CT_CommentPr_Attributes: Attributes;
export interface CT_Comment {
    text?: CT_Rst;
    commentPr?: CT_CommentPr;
    ref?: string;
    authorId?: number;
    guid?: string;
    shapeId?: number;
}
export declare const CT_Comment_Attributes: Attributes;
export interface CT_CommentList {
    comment?: CT_Comment[];
}
export declare const CT_CommentList_Attributes: Attributes;
export interface CT_Comments {
    authors?: CT_Authors;
    commentList?: CT_CommentList;
    extLst?: CT_ExtensionList[];
}
export declare const CT_Comments_Attributes: Attributes;
export interface CT_Schema {
    __any__?: any;
    ID?: string;
    SchemaRef?: string;
    Namespace?: string;
    SchemaLanguage?: string;
}
export declare const CT_Schema_Attributes: Attributes;
export interface CT_DataBinding {
    __any__?: any;
    DataBindingName?: string;
    FileBinding?: boolean;
    ConnectionID?: number;
    FileBindingName?: string;
    DataBindingLoadMode?: number;
}
export declare const CT_DataBinding_Attributes: Attributes;
export interface CT_Map {
    DataBinding?: CT_DataBinding;
    ID?: number;
    Name?: string;
    RootElement?: string;
    SchemaID?: string;
    ShowImportExportValidationErrors?: boolean;
    AutoFit?: boolean;
    Append?: boolean;
    PreserveSortAFLayout?: boolean;
    PreserveFormat?: boolean;
}
export declare const CT_Map_Attributes: Attributes;
export interface CT_MapInfo {
    Schema?: CT_Schema[];
    Map?: CT_Map[];
    SelectionNamespaces?: string;
}
export declare const CT_MapInfo_Attributes: Attributes;
export interface CT_Connections {
    connection?: CT_Connection[];
}
export declare const CT_Connections_Attributes: Attributes;
export interface CT_WorksheetSource {
    'ref'?: string;
    'name'?: string;
    'sheet'?: string;
    'r:id'?: string;
}
export declare const CT_WorksheetSource_Attributes: Attributes;
export interface CT_PageItem {
    name?: string;
}
export declare const CT_PageItem_Attributes: Attributes;
export interface CT_PCDSCPage {
    pageItem?: CT_PageItem[];
    count?: number;
}
export declare const CT_PCDSCPage_Attributes: Attributes;
export interface CT_Pages {
    page?: CT_PCDSCPage[];
    count?: number;
}
export declare const CT_Pages_Attributes: Attributes;
export interface CT_RangeSet {
    'i1'?: number;
    'i2'?: number;
    'i3'?: number;
    'i4'?: number;
    'ref'?: string;
    'name'?: string;
    'sheet'?: string;
    'r:id'?: string;
}
export declare const CT_RangeSet_Attributes: Attributes;
export interface CT_RangeSets {
    rangeSet?: CT_RangeSet[];
    count?: number;
}
export declare const CT_RangeSets_Attributes: Attributes;
export interface CT_Consolidation {
    pages?: CT_Pages;
    rangeSets?: CT_RangeSets;
    autoPage?: boolean;
}
export declare const CT_Consolidation_Attributes: Attributes;
export type ST_SourceType = 'worksheet' | 'external' | 'consolidation' | 'scenario';
export interface CT_CacheSource {
    worksheetSource?: CT_WorksheetSource;
    consolidation?: CT_Consolidation;
    extLst?: CT_ExtensionList[];
    type?: ST_SourceType;
    connectionId?: number;
}
export declare const CT_CacheSource_Attributes: Attributes;
export interface CT_Tuple {
    fld?: number;
    hier?: number;
    item?: number;
}
export declare const CT_Tuple_Attributes: Attributes;
export interface CT_Tuples {
    tpl?: CT_Tuple[];
    c?: number;
}
export declare const CT_Tuples_Attributes: Attributes;
export interface CT_Missing {
    tpls?: CT_Tuples[];
    x?: CT_X[];
    u?: boolean;
    f?: boolean;
    c?: string;
    cp?: number;
    in?: number;
    bc?: string;
    fc?: string;
    i?: boolean;
    un?: boolean;
    st?: boolean;
    b?: boolean;
}
export declare const CT_Missing_Attributes: Attributes;
export interface CT_Number {
    tpls?: CT_Tuples[];
    x?: CT_X[];
    v?: number;
    u?: boolean;
    f?: boolean;
    c?: string;
    cp?: number;
    in?: number;
    bc?: string;
    fc?: string;
    i?: boolean;
    un?: boolean;
    st?: boolean;
    b?: boolean;
}
export declare const CT_Number_Attributes: Attributes;
export interface CT_Error {
    tpls?: CT_Tuples[];
    x?: CT_X[];
    v?: string;
    u?: boolean;
    f?: boolean;
    c?: string;
    cp?: number;
    in?: number;
    bc?: string;
    fc?: string;
    i?: boolean;
    un?: boolean;
    st?: boolean;
    b?: boolean;
}
export declare const CT_Error_Attributes: Attributes;
export interface CT_String {
    tpls?: CT_Tuples[];
    x?: CT_X[];
    v?: string;
    u?: boolean;
    f?: boolean;
    c?: string;
    cp?: number;
    in?: number;
    bc?: string;
    fc?: string;
    i?: boolean;
    un?: boolean;
    st?: boolean;
    b?: boolean;
}
export declare const CT_String_Attributes: Attributes;
export interface CT_DateTime {
    x?: CT_X[];
    v?: string;
    u?: boolean;
    f?: boolean;
    c?: string;
    cp?: number;
}
export declare const CT_DateTime_Attributes: Attributes;
export interface CT_SharedItems {
    m?: CT_Missing;
    n?: CT_Number;
    b?: CT_Boolean;
    e?: CT_Error;
    s?: CT_String;
    d?: CT_DateTime;
    containsSemiMixedTypes?: boolean;
    containsNonDate?: boolean;
    containsDate?: boolean;
    containsString?: boolean;
    containsBlank?: boolean;
    containsMixedTypes?: boolean;
    containsNumber?: boolean;
    containsInteger?: boolean;
    minValue?: number;
    maxValue?: number;
    minDate?: string;
    maxDate?: string;
    count?: number;
    longText?: boolean;
}
export declare const CT_SharedItems_Attributes: Attributes;
export type ST_GroupBy = 'range' | 'seconds' | 'minutes' | 'hours' | 'days' | 'months' | 'quarters' | 'years';
export interface CT_RangePr {
    autoStart?: boolean;
    autoEnd?: boolean;
    groupBy?: ST_GroupBy;
    startNum?: number;
    endNum?: number;
    startDate?: string;
    endDate?: string;
    groupInterval?: number;
}
export declare const CT_RangePr_Attributes: Attributes;
export interface CT_DiscretePr {
    x?: CT_Index[];
    count?: number;
}
export declare const CT_DiscretePr_Attributes: Attributes;
export interface CT_GroupItems {
    m?: CT_Missing[];
    n?: CT_Number[];
    b?: CT_Boolean[];
    e?: CT_Error[];
    s?: CT_String[];
    d?: CT_DateTime[];
    count?: number;
}
export declare const CT_GroupItems_Attributes: Attributes;
export interface CT_FieldGroup {
    rangePr?: CT_RangePr[];
    discretePr?: CT_DiscretePr[];
    groupItems?: CT_GroupItems[];
    par?: number;
    base?: number;
}
export declare const CT_FieldGroup_Attributes: Attributes;
export type ST_NumFmtId = number;
export interface CT_CacheField {
    sharedItems?: CT_SharedItems;
    fieldGroup?: CT_FieldGroup[];
    mpMap?: CT_X[];
    extLst?: CT_ExtensionList[];
    name?: string;
    caption?: string;
    propertyName?: string;
    serverField?: boolean;
    uniqueList?: boolean;
    numFmtId?: number;
    formula?: string;
    sqlType?: number;
    hierarchy?: number;
    level?: number;
    databaseField?: boolean;
    mappingCount?: number;
    memberPropertyField?: boolean;
}
export declare const CT_CacheField_Attributes: Attributes;
export interface CT_CacheFields {
    cacheField?: CT_CacheField[];
    count?: number;
}
export declare const CT_CacheFields_Attributes: Attributes;
export interface CT_FieldUsage {
    x?: number;
}
export declare const CT_FieldUsage_Attributes: Attributes;
export interface CT_FieldsUsage {
    fieldUsage?: CT_FieldUsage[];
    count?: number;
}
export declare const CT_FieldsUsage_Attributes: Attributes;
export interface CT_GroupMember {
    uniqueName?: string;
    group?: boolean;
}
export declare const CT_GroupMember_Attributes: Attributes;
export interface CT_GroupMembers {
    groupMember?: CT_GroupMember[];
    count?: number;
}
export declare const CT_GroupMembers_Attributes: Attributes;
export interface CT_LevelGroup {
    groupMembers?: CT_GroupMembers[];
    name?: string;
    uniqueName?: string;
    caption?: string;
    uniqueParent?: string;
    id?: number;
}
export declare const CT_LevelGroup_Attributes: Attributes;
export interface CT_Groups {
    group?: CT_LevelGroup[];
    count?: number;
}
export declare const CT_Groups_Attributes: Attributes;
export interface CT_GroupLevel {
    groups?: CT_Groups[];
    extLst?: CT_ExtensionList[];
    uniqueName?: string;
    caption?: string;
    user?: boolean;
    customRollUp?: boolean;
}
export declare const CT_GroupLevel_Attributes: Attributes;
export interface CT_GroupLevels {
    groupLevel?: CT_GroupLevel[];
    count?: number;
}
export declare const CT_GroupLevels_Attributes: Attributes;
export interface CT_CacheHierarchy {
    fieldsUsage?: CT_FieldsUsage[];
    groupLevels?: CT_GroupLevels[];
    extLst?: CT_ExtensionList[];
    uniqueName?: string;
    caption?: string;
    measure?: boolean;
    set?: boolean;
    parentSet?: number;
    iconSet?: number;
    attribute?: boolean;
    time?: boolean;
    keyAttribute?: boolean;
    defaultMemberUniqueName?: string;
    allUniqueName?: string;
    allCaption?: string;
    dimensionUniqueName?: string;
    displayFolder?: string;
    measureGroup?: string;
    measures?: boolean;
    count?: number;
    oneField?: boolean;
    memberValueDatatype?: number;
    unbalanced?: boolean;
    unbalancedGroup?: boolean;
    hidden?: boolean;
}
export declare const CT_CacheHierarchy_Attributes: Attributes;
export interface CT_CacheHierarchies {
    cacheHierarchy?: CT_CacheHierarchy[];
    count?: number;
}
export declare const CT_CacheHierarchies_Attributes: Attributes;
export interface CT_PCDKPI {
    uniqueName?: string;
    caption?: string;
    displayFolder?: string;
    measureGroup?: string;
    parent?: string;
    value?: string;
    goal?: string;
    status?: string;
    trend?: string;
    weight?: string;
    time?: string;
}
export declare const CT_PCDKPI_Attributes: Attributes;
export interface CT_PCDKPIs {
    kpi?: CT_PCDKPI[];
    count?: number;
}
export declare const CT_PCDKPIs_Attributes: Attributes;
export interface CT_PivotAreaReference {
    x?: CT_Index[];
    extLst?: CT_ExtensionList[];
    field?: number;
    count?: number;
    selected?: boolean;
    byPosition?: boolean;
    relative?: boolean;
    defaultSubtotal?: boolean;
    sumSubtotal?: boolean;
    countASubtotal?: boolean;
    avgSubtotal?: boolean;
    maxSubtotal?: boolean;
    minSubtotal?: boolean;
    productSubtotal?: boolean;
    countSubtotal?: boolean;
    stdDevSubtotal?: boolean;
    stdDevPSubtotal?: boolean;
    varSubtotal?: boolean;
    varPSubtotal?: boolean;
}
export declare const CT_PivotAreaReference_Attributes: Attributes;
export interface CT_PivotAreaReferences {
    reference?: CT_PivotAreaReference[];
    count?: number;
}
export declare const CT_PivotAreaReferences_Attributes: Attributes;
export type ST_PivotAreaType = 'none' | 'normal' | 'data' | 'all' | 'origin' | 'button' | 'topEnd';
export type ST_Axis = 'axisRow' | 'axisCol' | 'axisPage' | 'axisValues';
export interface CT_PivotArea {
    references?: CT_PivotAreaReferences[];
    extLst?: CT_ExtensionList[];
    field?: number;
    type?: ST_PivotAreaType;
    dataOnly?: boolean;
    labelOnly?: boolean;
    grandRow?: boolean;
    grandCol?: boolean;
    cacheIndex?: boolean;
    outline?: boolean;
    offset?: string;
    collapsedLevelsAreSubtotals?: boolean;
    axis?: ST_Axis;
    fieldPosition?: number;
}
export declare const CT_PivotArea_Attributes: Attributes;
export interface CT_CalculatedItem {
    pivotArea?: CT_PivotArea[];
    extLst?: CT_ExtensionList[];
    field?: number;
    formula?: string;
}
export declare const CT_CalculatedItem_Attributes: Attributes;
export interface CT_CalculatedItems {
    calculatedItem?: CT_CalculatedItem[];
    count?: number;
}
export declare const CT_CalculatedItems_Attributes: Attributes;
export interface CT_CalculatedMember {
    extLst?: CT_ExtensionList[];
    name?: string;
    mdx?: string;
    memberName?: string;
    hierarchy?: string;
    parent?: string;
    solveOrder?: number;
    set?: boolean;
}
export declare const CT_CalculatedMember_Attributes: Attributes;
export interface CT_CalculatedMembers {
    calculatedMember?: CT_CalculatedMember[];
    count?: number;
}
export declare const CT_CalculatedMembers_Attributes: Attributes;
export interface CT_PivotDimension {
    measure?: boolean;
    name?: string;
    uniqueName?: string;
    caption?: string;
}
export declare const CT_PivotDimension_Attributes: Attributes;
export interface CT_Dimensions {
    dimension?: CT_PivotDimension[];
    count?: number;
}
export declare const CT_Dimensions_Attributes: Attributes;
export interface CT_MeasureGroup {
    name?: string;
    caption?: string;
}
export declare const CT_MeasureGroup_Attributes: Attributes;
export interface CT_MeasureGroups {
    measureGroup?: CT_MeasureGroup[];
    count?: number;
}
export declare const CT_MeasureGroups_Attributes: Attributes;
export interface CT_MeasureDimensionMap {
    measureGroup?: number;
    dimension?: number;
}
export declare const CT_MeasureDimensionMap_Attributes: Attributes;
export interface CT_MeasureDimensionMaps {
    map?: CT_MeasureDimensionMap[];
    count?: number;
}
export declare const CT_MeasureDimensionMaps_Attributes: Attributes;
export interface CT_PivotCacheDefinition {
    'cacheSource'?: CT_CacheSource;
    'cacheFields'?: CT_CacheFields;
    'cacheHierarchies'?: CT_CacheHierarchies[];
    'kpis'?: CT_PCDKPIs[];
    'tupleCache'?: boolean;
    'calculatedItems'?: CT_CalculatedItems[];
    'calculatedMembers'?: CT_CalculatedMembers[];
    'dimensions'?: CT_Dimensions[];
    'measureGroups'?: CT_MeasureGroups[];
    'maps'?: CT_MeasureDimensionMaps[];
    'extLst'?: CT_ExtensionList[];
    'r:id'?: string;
    'invalid'?: boolean;
    'saveData'?: boolean;
    'refreshOnLoad'?: boolean;
    'optimizeMemory'?: boolean;
    'enableRefresh'?: boolean;
    'refreshedBy'?: string;
    'refreshedDateIso'?: string;
    'backgroundQuery'?: boolean;
    'missingItemsLimit'?: number;
    'createdVersion'?: number;
    'refreshedVersion'?: number;
    'minRefreshableVersion'?: number;
    'recordCount'?: number;
    'upgradeOnRefresh'?: boolean;
    'supportSubquery'?: boolean;
    'supportAdvancedDrill'?: boolean;
}
export declare const CT_PivotCacheDefinition_Attributes: Attributes;
export interface CT_Record {
    m?: CT_Missing[];
    n?: CT_Number[];
    b?: CT_Boolean[];
    e?: CT_Error[];
    s?: CT_String[];
    d?: CT_DateTime[];
    x?: CT_Index[];
}
export declare const CT_Record_Attributes: Attributes;
export interface CT_PivotCacheRecords {
    r?: CT_Record[];
    extLst?: CT_ExtensionList[];
    count?: number;
}
export declare const CT_PivotCacheRecords_Attributes: Attributes;
export interface CT_PCDSDTCEntries {
    m?: CT_Missing[];
    n?: CT_Number[];
    e?: CT_Error[];
    s?: CT_String[];
    count?: number;
}
export declare const CT_PCDSDTCEntries_Attributes: Attributes;
export type ST_SortType = 'none' | 'ascending' | 'descending' | 'ascendingAlpha' | 'descendingAlpha' | 'ascendingNatural' | 'descendingNatural';
export interface CT_Set {
    tpls?: CT_Tuples[];
    sortByTuple?: CT_Tuples[];
    count?: number;
    maxRank?: number;
    setDefinition?: string;
    sortType?: ST_SortType;
    queryFailed?: boolean;
}
export declare const CT_Set_Attributes: Attributes;
export interface CT_Sets {
    set?: CT_Set[];
    count?: number;
}
export declare const CT_Sets_Attributes: Attributes;
export interface CT_Query {
    tpls?: CT_Tuples[];
    mdx?: string;
}
export declare const CT_Query_Attributes: Attributes;
export interface CT_QueryCache {
    query?: CT_Query[];
    count?: number;
}
export declare const CT_QueryCache_Attributes: Attributes;
export interface CT_ServerFormat {
    culture?: string;
    format?: string;
}
export declare const CT_ServerFormat_Attributes: Attributes;
export interface CT_ServerFormats {
    serverFormat?: CT_ServerFormat[];
    count?: number;
}
export declare const CT_ServerFormats_Attributes: Attributes;
export interface CT_TupleCache {
    entries?: CT_PCDSDTCEntries[];
    sets?: CT_Sets[];
    queryCache?: CT_QueryCache[];
    serverFormats?: CT_ServerFormats;
    extLst?: CT_ExtensionList[];
}
export declare const CT_TupleCache_Attributes: Attributes;
export interface CT_Location {
    ref?: string;
    firstHeaderRow?: number;
    firstDataRow?: number;
    firstDataCol?: number;
    rowPageCount?: number;
    colPageCount?: number;
}
export declare const CT_Location_Attributes: Attributes;
export type ST_ItemType = 'data' | 'default' | 'sum' | 'countA' | 'avg' | 'max' | 'min' | 'product' | 'count' | 'stdDev' | 'stdDevP' | 'var' | 'varP' | 'grand' | 'blank';
export interface CT_Item {
    n?: string;
    t?: ST_ItemType;
    h?: boolean;
    s?: boolean;
    sd?: boolean;
    f?: boolean;
    m?: boolean;
    c?: boolean;
    x?: number;
    d?: boolean;
    e?: boolean;
}
export declare const CT_Item_Attributes: Attributes;
export interface CT_Items {
    item?: CT_Item[];
    count?: number;
}
export declare const CT_Items_Attributes: Attributes;
export interface CT_AutoSortScope {
    pivotArea?: CT_PivotArea[];
}
export declare const CT_AutoSortScope_Attributes: Attributes;
export type ST_FieldSortType = 'manual' | 'ascending' | 'descending';
export interface CT_PivotField {
    items?: CT_Items[];
    autoSortScope?: CT_AutoSortScope[];
    extLst?: CT_ExtensionList[];
    name?: string;
    axis?: ST_Axis;
    dataField?: boolean;
    subtotalCaption?: string;
    showDropDowns?: boolean;
    hiddenLevel?: boolean;
    uniqueMemberProperty?: string;
    compact?: boolean;
    allDrilled?: boolean;
    numFmtId?: number;
    outline?: boolean;
    subtotalTop?: boolean;
    dragToRow?: boolean;
    dragToCol?: boolean;
    multipleItemSelectionAllowed?: boolean;
    dragToPage?: boolean;
    dragToData?: boolean;
    dragOff?: boolean;
    showAll?: boolean;
    insertBlankRow?: boolean;
    serverField?: boolean;
    insertPageBreak?: boolean;
    autoShow?: boolean;
    topAutoShow?: boolean;
    hideNewItems?: boolean;
    measureFilter?: boolean;
    includeNewItemsInFilter?: boolean;
    itemPageCount?: number;
    sortType?: ST_FieldSortType;
    dataSourceSort?: boolean;
    nonAutoSortDefault?: boolean;
    rankBy?: number;
    defaultSubtotal?: boolean;
    sumSubtotal?: boolean;
    countASubtotal?: boolean;
    avgSubtotal?: boolean;
    maxSubtotal?: boolean;
    minSubtotal?: boolean;
    productSubtotal?: boolean;
    countSubtotal?: boolean;
    stdDevSubtotal?: boolean;
    stdDevPSubtotal?: boolean;
    varSubtotal?: boolean;
    varPSubtotal?: boolean;
    showPropCell?: boolean;
    showPropTip?: boolean;
    showPropAsCaption?: boolean;
    defaultAttributeDrillState?: boolean;
}
export declare const CT_PivotField_Attributes: Attributes;
export interface CT_PivotFields {
    pivotField?: CT_PivotField[];
    count?: number;
}
export declare const CT_PivotFields_Attributes: Attributes;
export interface CT_Field {
    x?: number;
}
export declare const CT_Field_Attributes: Attributes;
export interface CT_RowFields {
    field?: CT_Field[];
    count?: number;
}
export declare const CT_RowFields_Attributes: Attributes;
export interface CT_I {
    x?: CT_X[];
    t?: ST_ItemType;
    r?: number;
    i?: number;
}
export declare const CT_I_Attributes: Attributes;
export interface CT_rowItems {
    i?: CT_I[];
    count?: number;
}
export declare const CT_rowItems_Attributes: Attributes;
export interface CT_ColFields {
    field?: CT_Field[];
    count?: number;
}
export declare const CT_ColFields_Attributes: Attributes;
export interface CT_colItems {
    i?: CT_I[];
    count?: number;
}
export declare const CT_colItems_Attributes: Attributes;
export interface CT_PageField {
    extLst?: CT_ExtensionList[];
    fld?: number;
    item?: number;
    hier?: number;
    name?: string;
    cap?: string;
}
export declare const CT_PageField_Attributes: Attributes;
export interface CT_PageFields {
    pageField?: CT_PageField[];
    count?: number;
}
export declare const CT_PageFields_Attributes: Attributes;
export type ST_DataConsolidateFunction = 'average' | 'count' | 'countNums' | 'max' | 'min' | 'product' | 'stdDev' | 'stdDevp' | 'sum' | 'var' | 'varp';
export type ST_ShowDataAs = 'normal' | 'difference' | 'percent' | 'percentDiff' | 'runTotal' | 'percentOfRow' | 'percentOfCol' | 'percentOfTotal' | 'index';
export interface CT_DataField {
    extLst?: CT_ExtensionList[];
    name?: string;
    fld?: number;
    subtotal?: ST_DataConsolidateFunction;
    showDataAs?: ST_ShowDataAs;
    baseField?: number;
    baseItem?: number;
    numFmtId?: number;
}
export declare const CT_DataField_Attributes: Attributes;
export interface CT_DataFields {
    dataField?: CT_DataField[];
    count?: number;
}
export declare const CT_DataFields_Attributes: Attributes;
export type ST_FormatAction = 'blank' | 'formatting' | 'drill' | 'formula';
export interface CT_Format {
    pivotArea?: CT_PivotArea[];
    extLst?: CT_ExtensionList[];
    action?: ST_FormatAction;
    dxfId?: number;
}
export declare const CT_Format_Attributes: Attributes;
export interface CT_Formats {
    format?: CT_Format[];
    count?: number;
}
export declare const CT_Formats_Attributes: Attributes;
export interface CT_PivotAreas {
    pivotArea?: CT_PivotArea[];
    count?: number;
}
export declare const CT_PivotAreas_Attributes: Attributes;
export type ST_Scope = 'selection' | 'data' | 'field';
export type ST_Type = 'none' | 'all' | 'row' | 'column';
export interface CT_ConditionalFormat {
    pivotAreas?: CT_PivotAreas[];
    extLst?: CT_ExtensionList[];
    scope?: ST_Scope;
    type?: ST_Type;
    priority?: number;
}
export declare const CT_ConditionalFormat_Attributes: Attributes;
export interface CT_ConditionalFormats {
    conditionalFormat?: CT_ConditionalFormat[];
    count?: number;
}
export declare const CT_ConditionalFormats_Attributes: Attributes;
export interface CT_ChartFormat {
    pivotArea?: CT_PivotArea[];
    chart?: number;
    format?: number;
    series?: boolean;
}
export declare const CT_ChartFormat_Attributes: Attributes;
export interface CT_ChartFormats {
    chartFormat?: CT_ChartFormat[];
    count?: number;
}
export declare const CT_ChartFormats_Attributes: Attributes;
export interface CT_MemberProperty {
    name?: string;
    showCell?: boolean;
    showTip?: boolean;
    showAsCaption?: boolean;
    nameLen?: number;
    pPos?: number;
    pLen?: number;
    level?: number;
    field?: number;
}
export declare const CT_MemberProperty_Attributes: Attributes;
export interface CT_MemberProperties {
    mp?: CT_MemberProperty[];
    count?: number;
}
export declare const CT_MemberProperties_Attributes: Attributes;
export interface CT_Member {
    name?: string;
}
export declare const CT_Member_Attributes: Attributes;
export interface CT_Members {
    member?: CT_Member[];
    count?: number;
    level?: number;
}
export declare const CT_Members_Attributes: Attributes;
export interface CT_PivotHierarchy {
    mps?: CT_MemberProperties[];
    members?: CT_Members[];
    extLst?: CT_ExtensionList[];
    outline?: boolean;
    multipleItemSelectionAllowed?: boolean;
    subtotalTop?: boolean;
    showInFieldList?: boolean;
    dragToRow?: boolean;
    dragToCol?: boolean;
    dragToPage?: boolean;
    dragToData?: boolean;
    dragOff?: boolean;
    includeNewItemsInFilter?: boolean;
    caption?: string;
}
export declare const CT_PivotHierarchy_Attributes: Attributes;
export interface CT_PivotHierarchies {
    pivotHierarchy?: CT_PivotHierarchy[];
    count?: number;
}
export declare const CT_PivotHierarchies_Attributes: Attributes;
export interface CT_PivotTableStyle {
    name?: string;
    showRowHeaders?: boolean;
    showColHeaders?: boolean;
    showRowStripes?: boolean;
    showColStripes?: boolean;
    showLastColumn?: boolean;
}
export declare const CT_PivotTableStyle_Attributes: Attributes;
export type ST_PivotFilterType = 'unknown' | 'count' | 'percent' | 'sum' | 'captionEqual' | 'captionNotEqual' | 'captionBeginsWith' | 'captionNotBeginsWith' | 'captionEndsWith' | 'captionNotEndsWith' | 'captionContains' | 'captionNotContains' | 'captionGreaterThan' | 'captionGreaterThanOrEqual' | 'captionLessThan' | 'captionLessThanOrEqual' | 'captionBetween' | 'captionNotBetween' | 'valueEqual' | 'valueNotEqual' | 'valueGreaterThan' | 'valueGreaterThanOrEqual' | 'valueLessThan' | 'valueLessThanOrEqual' | 'valueBetween' | 'valueNotBetween' | 'dateEqual' | 'dateNotEqual' | 'dateOlderThan' | 'dateOlderThanOrEqual' | 'dateNewerThan' | 'dateNewerThanOrEqual' | 'dateBetween' | 'dateNotBetween' | 'tomorrow' | 'today' | 'yesterday' | 'nextWeek' | 'thisWeek' | 'lastWeek' | 'nextMonth' | 'thisMonth' | 'lastMonth' | 'nextQuarter' | 'thisQuarter' | 'lastQuarter' | 'nextYear' | 'thisYear' | 'lastYear' | 'yearToDate' | 'Q1' | 'Q2' | 'Q3' | 'Q4' | 'M1' | 'M2' | 'M3' | 'M4' | 'M5' | 'M6' | 'M7' | 'M8' | 'M9' | 'M10' | 'M11' | 'M12';
export interface CT_PivotFilter {
    autoFilter?: CT_AutoFilter;
    extLst?: CT_ExtensionList[];
    fld?: number;
    mpFld?: number;
    type?: ST_PivotFilterType;
    evalOrder?: number;
    id?: number;
    iMeasureHier?: number;
    iMeasureFld?: number;
    name?: string;
    description?: string;
    stringValue1?: string;
    stringValue2?: string;
}
export declare const CT_PivotFilter_Attributes: Attributes;
export interface CT_PivotFilters {
    filter?: CT_PivotFilter[];
    count?: number;
}
export declare const CT_PivotFilters_Attributes: Attributes;
export interface CT_HierarchyUsage {
    hierarchyUsage?: number;
}
export declare const CT_HierarchyUsage_Attributes: Attributes;
export interface CT_RowHierarchiesUsage {
    rowHierarchyUsage?: CT_HierarchyUsage[];
    count?: number;
}
export declare const CT_RowHierarchiesUsage_Attributes: Attributes;
export interface CT_ColHierarchiesUsage {
    colHierarchyUsage?: CT_HierarchyUsage[];
    count?: number;
}
export declare const CT_ColHierarchiesUsage_Attributes: Attributes;
export interface CT_pivotTableDefinition {
    location?: CT_Location[];
    pivotFields?: CT_PivotFields[];
    rowFields?: CT_RowFields[];
    rowItems?: CT_rowItems[];
    colFields?: CT_ColFields[];
    colItems?: CT_colItems[];
    pageFields?: CT_PageFields[];
    dataFields?: CT_DataFields[];
    formats?: CT_Formats[];
    conditionalFormats?: CT_ConditionalFormats[];
    chartFormats?: CT_ChartFormats[];
    pivotHierarchies?: CT_PivotHierarchies[];
    pivotTableStyleInfo?: CT_PivotTableStyle;
    filters?: CT_PivotFilters;
    rowHierarchiesUsage?: CT_RowHierarchiesUsage;
    colHierarchiesUsage?: CT_ColHierarchiesUsage;
    extLst?: CT_ExtensionList[];
    name?: string;
    cacheId?: number;
    dataOnRows?: boolean;
    dataPosition?: number;
    dataCaption?: string;
    grandTotalCaption?: string;
    errorCaption?: string;
    showError?: boolean;
    missingCaption?: string;
    showMissing?: boolean;
    pageStyle?: string;
    pivotTableStyle?: string;
    vacatedStyle?: string;
    tag?: string;
    updatedVersion?: number;
    minRefreshableVersion?: number;
    asteriskTotals?: boolean;
    showItems?: boolean;
    editData?: boolean;
    disableFieldList?: boolean;
    showCalcMbrs?: boolean;
    visualTotals?: boolean;
    showMultipleLabel?: boolean;
    showDataDropDown?: boolean;
    showDrill?: boolean;
    printDrill?: boolean;
    showMemberPropertyTips?: boolean;
    showDataTips?: boolean;
    enableWizard?: boolean;
    enableDrill?: boolean;
    enableFieldProperties?: boolean;
    preserveFormatting?: boolean;
    useAutoFormatting?: boolean;
    pageWrap?: number;
    pageOverThenDown?: boolean;
    subtotalHiddenItems?: boolean;
    rowGrandTotals?: boolean;
    colGrandTotals?: boolean;
    fieldPrintTitles?: boolean;
    itemPrintTitles?: boolean;
    mergeItem?: boolean;
    showDropZones?: boolean;
    createdVersion?: number;
    indent?: number;
    showEmptyRow?: boolean;
    showEmptyCol?: boolean;
    showHeaders?: boolean;
    compact?: boolean;
    outline?: boolean;
    outlineData?: boolean;
    compactData?: boolean;
    published?: boolean;
    gridDropZones?: boolean;
    immersive?: boolean;
    multipleFieldFilters?: boolean;
    chartFormat?: number;
    rowHeaderCaption?: string;
    colHeaderCaption?: string;
    fieldListSortAscending?: boolean;
    mdxSubqueries?: boolean;
    customListSort?: boolean;
}
export declare const CT_pivotTableDefinition_Attributes: Attributes;
export interface CT_QueryTableField {
    extLst?: CT_ExtensionList;
    id?: number;
    name?: string;
    dataBound?: boolean;
    rowNumbers?: boolean;
    fillFormulas?: boolean;
    clipped?: boolean;
    tableColumnId?: number;
}
export declare const CT_QueryTableField_Attributes: Attributes;
export interface CT_QueryTableFields {
    queryTableField?: CT_QueryTableField[];
    count?: number;
}
export declare const CT_QueryTableFields_Attributes: Attributes;
export interface CT_DeletedField {
    name?: string;
}
export declare const CT_DeletedField_Attributes: Attributes;
export interface CT_QueryTableDeletedFields {
    deletedField?: CT_DeletedField[];
    count?: number;
}
export declare const CT_QueryTableDeletedFields_Attributes: Attributes;
export interface CT_QueryTableRefresh {
    queryTableFields?: CT_QueryTableFields;
    queryTableDeletedFields?: CT_QueryTableDeletedFields;
    sortState?: CT_SortState;
    extLst?: CT_ExtensionList;
    preserveSortFilterLayout?: boolean;
    fieldIdWrapped?: boolean;
    headersInLastRefresh?: boolean;
    minimumVersion?: number;
    nextId?: number;
    unboundColumnsLeft?: number;
    unboundColumnsRight?: number;
}
export declare const CT_QueryTableRefresh_Attributes: Attributes;
export type ST_GrowShrinkType = 'insertDelete' | 'insertClear' | 'overwriteClear';
export interface CT_QueryTable {
    queryTableRefresh?: CT_QueryTableRefresh;
    extLst?: CT_ExtensionList;
    name?: string;
    headers?: boolean;
    rowNumbers?: boolean;
    disableRefresh?: boolean;
    backgroundRefresh?: boolean;
    firstBackgroundRefresh?: boolean;
    refreshOnLoad?: boolean;
    growShrinkType?: ST_GrowShrinkType;
    fillFormulas?: boolean;
    removeDataOnSave?: boolean;
    disableEdit?: boolean;
    preserveFormatting?: boolean;
    adjustColumnWidth?: boolean;
    intermediate?: boolean;
    connectionId?: number;
}
export declare const CT_QueryTable_Attributes: Attributes;
export interface CT_Sst {
    si?: CT_Rst[];
    extLst?: CT_ExtensionList[];
    count?: number;
    uniqueCount?: number;
}
export declare const CT_Sst_Attributes: Attributes;
export interface CT_SheetId {
    val?: number;
}
export declare const CT_SheetId_Attributes: Attributes;
export interface CT_SheetIdMap {
    sheetId?: CT_SheetId[];
    count?: number;
}
export declare const CT_SheetIdMap_Attributes: Attributes;
export interface CT_Reviewed {
    rId?: number;
}
export declare const CT_Reviewed_Attributes: Attributes;
export interface CT_ReviewedRevisions {
    reviewed?: CT_Reviewed[];
    count?: number;
}
export declare const CT_ReviewedRevisions_Attributes: Attributes;
export interface CT_RevisionHeader {
    'sheetIdMap'?: CT_SheetIdMap;
    'reviewedList'?: CT_ReviewedRevisions;
    'extLst'?: CT_ExtensionList[];
    'guid'?: string;
    'dateTime'?: string;
    'maxSheetId'?: number;
    'userName'?: string;
    'r:id'?: string;
    'minRId'?: number;
    'maxRId'?: number;
}
export declare const CT_RevisionHeader_Attributes: Attributes;
export interface CT_RevisionHeaders {
    header?: CT_RevisionHeader[];
    guid?: string;
    lastGuid?: string;
    shared?: boolean;
    diskRevisions?: boolean;
    history?: boolean;
    trackRevisions?: boolean;
    exclusive?: boolean;
    revisionId?: number;
    version?: number;
    keepChangeHistory?: boolean;
    protected?: boolean;
    preserveHistory?: number;
}
export declare const CT_RevisionHeaders_Attributes: Attributes;
export type ST_FormulaExpression = 'ref' | 'refError' | 'area' | 'areaError' | 'computedArea';
export interface CT_UndoInfo {
    index?: number;
    exp?: ST_FormulaExpression;
    ref3D?: boolean;
    array?: boolean;
    v?: boolean;
    nf?: boolean;
    cs?: boolean;
    dr?: string;
    dn?: string;
    r?: string;
    sId?: number;
}
export declare const CT_UndoInfo_Attributes: Attributes;
export interface CT_CellFormula {
}
export declare const CT_CellFormula_Attributes: Attributes;
export type ST_CellType = 'b' | 'd' | 'n' | 'e' | 's' | 'str' | 'inlineStr';
export interface CT_Cell {
    f?: CT_CellFormula;
    v?: string;
    is?: CT_Rst;
    extLst?: CT_ExtensionList[];
    r?: string;
    s?: number;
    t?: ST_CellType;
    cm?: number;
    vm?: number;
    ph?: boolean;
}
export declare const CT_Cell_Attributes: Attributes;
export type ST_FontFamily = number;
export interface CT_FontFamily {
    val?: number;
}
export declare const CT_FontFamily_Attributes: Attributes;
export interface CT_Font {
    name?: CT_FontName;
    charset?: CT_IntProperty;
    family?: CT_FontFamily;
    b?: CT_BooleanProperty;
    i?: CT_BooleanProperty;
    strike?: CT_BooleanProperty;
    outline?: CT_BooleanProperty;
    shadow?: CT_BooleanProperty;
    condense?: CT_BooleanProperty;
    extend?: CT_BooleanProperty;
    color?: CT_Color;
    sz?: CT_FontSize;
    u?: CT_UnderlineProperty;
    vertAlign?: CT_VerticalAlignFontProperty;
    scheme?: CT_FontScheme;
}
export declare const CT_Font_Attributes: Attributes;
export interface CT_NumFmt {
    numFmtId?: number;
    formatCode?: string;
}
export declare const CT_NumFmt_Attributes: Attributes;
export type ST_PatternType = 'none' | 'solid' | 'mediumGray' | 'darkGray' | 'lightGray' | 'darkHorizontal' | 'darkVertical' | 'darkDown' | 'darkUp' | 'darkGrid' | 'darkTrellis' | 'lightHorizontal' | 'lightVertical' | 'lightDown' | 'lightUp' | 'lightGrid' | 'lightTrellis' | 'gray125' | 'gray0625';
export interface CT_PatternFill {
    fgColor?: CT_Color;
    bgColor?: CT_Color;
    patternType?: ST_PatternType;
}
export declare const CT_PatternFill_Attributes: Attributes;
export type ST_GradientType = 'linear' | 'path';
export interface CT_GradientFill {
    stop?: CT_GradientStop[];
    type?: ST_GradientType;
    degree?: number;
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
}
export declare const CT_GradientFill_Attributes: Attributes;
export interface CT_Fill {
    patternFill?: CT_PatternFill;
    gradientFill?: CT_GradientFill;
}
export declare const CT_Fill_Attributes: Attributes;
export type ST_HorizontalAlignment = 'general' | 'left' | 'center' | 'right' | 'fill' | 'justify' | 'centerContinuous' | 'distributed';
export type ST_VerticalAlignment = 'top' | 'center' | 'bottom' | 'justify' | 'distributed';
export interface CT_CellAlignment {
    horizontal?: ST_HorizontalAlignment;
    vertical?: ST_VerticalAlignment;
    textRotation?: number;
    wrapText?: boolean;
    indent?: number;
    relativeIndent?: number;
    justifyLastLine?: boolean;
    shrinkToFit?: boolean;
    readingOrder?: number;
}
export declare const CT_CellAlignment_Attributes: Attributes;
export type ST_BorderStyle = 'none' | 'thin' | 'medium' | 'dashed' | 'dotted' | 'thick' | 'double' | 'hair' | 'mediumDashed' | 'dashDot' | 'mediumDashDot' | 'dashDotDot' | 'mediumDashDotDot' | 'slantDashDot';
export interface CT_BorderPr {
    color?: CT_Color;
    style?: ST_BorderStyle;
}
export declare const CT_BorderPr_Attributes: Attributes;
export interface CT_Border {
    start?: CT_BorderPr;
    end?: CT_BorderPr;
    left?: CT_BorderPr;
    right?: CT_BorderPr;
    top?: CT_BorderPr;
    bottom?: CT_BorderPr;
    diagonal?: CT_BorderPr;
    vertical?: CT_BorderPr;
    horizontal?: CT_BorderPr;
    diagonalUp?: boolean;
    diagonalDown?: boolean;
    outline?: boolean;
}
export declare const CT_Border_Attributes: Attributes;
export interface CT_CellProtection {
    locked?: boolean;
    hidden?: boolean;
}
export declare const CT_CellProtection_Attributes: Attributes;
export interface CT_Dxf {
    font?: CT_Font;
    numFmt?: CT_NumFmt;
    fill?: CT_Fill;
    alignment?: CT_CellAlignment;
    border?: CT_Border;
    protection?: CT_CellProtection;
    extLst?: CT_ExtensionList;
}
export declare const CT_Dxf_Attributes: Attributes;
export interface CT_RevisionCellChange {
    oc?: CT_Cell;
    nc?: CT_Cell;
    odxf?: boolean;
    ndxf?: CT_Dxf;
    extLst?: CT_ExtensionList[];
    sId?: number;
    xfDxf?: boolean;
    s?: boolean;
    dxf?: boolean;
    numFmtId?: number;
    quotePrefix?: boolean;
    oldQuotePrefix?: boolean;
    ph?: boolean;
    oldPh?: boolean;
    endOfListFormulaUpdate?: boolean;
}
export declare const CT_RevisionCellChange_Attributes: Attributes;
export interface CT_RevisionFormatting {
    dxf?: CT_Dxf;
    extLst?: CT_ExtensionList[];
    sheetId?: number;
    xfDxf?: boolean;
    s?: boolean;
    sqref?: string;
    start?: number;
    length?: number;
}
export declare const CT_RevisionFormatting_Attributes: Attributes;
export type ST_rwColActionType = 'insertRow' | 'deleteRow' | 'insertCol' | 'deleteCol';
export interface CT_RevisionRowColumn {
    undo?: CT_UndoInfo[];
    rcc?: CT_RevisionCellChange[];
    rfmt?: CT_RevisionFormatting[];
    sId?: number;
    eol?: boolean;
    ref?: string;
    action?: ST_rwColActionType;
    edge?: boolean;
}
export declare const CT_RevisionRowColumn_Attributes: Attributes;
export interface CT_RevisionMove {
    undo?: CT_UndoInfo[];
    rcc?: CT_RevisionCellChange[];
    rfmt?: CT_RevisionFormatting[];
    sheetId?: number;
    source?: string;
    destination?: string;
    sourceSheetId?: number;
}
export declare const CT_RevisionMove_Attributes: Attributes;
export type ST_RevisionAction = 'add' | 'delete';
export interface CT_RevisionCustomView {
    guid?: string;
    action?: ST_RevisionAction;
}
export declare const CT_RevisionCustomView_Attributes: Attributes;
export interface CT_RevisionSheetRename {
    extLst?: CT_ExtensionList[];
    sheetId?: number;
    oldName?: string;
    newName?: string;
}
export declare const CT_RevisionSheetRename_Attributes: Attributes;
export interface CT_RevisionInsertSheet {
    sheetId?: number;
    name?: string;
    sheetPosition?: number;
}
export declare const CT_RevisionInsertSheet_Attributes: Attributes;
export interface CT_RevisionAutoFormatting {
    sheetId?: number;
    ref?: string;
}
export declare const CT_RevisionAutoFormatting_Attributes: Attributes;
export interface CT_RevisionDefinedName {
    formula?: string;
    oldFormula?: string;
    extLst?: CT_ExtensionList[];
    localSheetId?: number;
    customView?: boolean;
    name?: string;
    function?: boolean;
    oldFunction?: boolean;
    functionGroupId?: number;
    oldFunctionGroupId?: number;
    shortcutKey?: number;
    oldShortcutKey?: number;
    hidden?: boolean;
    oldHidden?: boolean;
    customMenu?: string;
    oldCustomMenu?: string;
    description?: string;
    oldDescription?: string;
    help?: string;
    oldHelp?: string;
    statusBar?: string;
    oldStatusBar?: string;
    comment?: string;
    oldComment?: string;
}
export declare const CT_RevisionDefinedName_Attributes: Attributes;
export interface CT_RevisionComment {
    sheetId?: number;
    cell?: string;
    guid?: string;
    action?: ST_RevisionAction;
    alwaysShow?: boolean;
    old?: boolean;
    hiddenRow?: boolean;
    hiddenColumn?: boolean;
    author?: string;
    oldLength?: number;
    newLength?: number;
}
export declare const CT_RevisionComment_Attributes: Attributes;
export interface CT_RevisionQueryTableField {
    sheetId?: number;
    ref?: string;
    fieldId?: number;
}
export declare const CT_RevisionQueryTableField_Attributes: Attributes;
export interface CT_RevisionConflict {
    sheetId?: number;
}
export declare const CT_RevisionConflict_Attributes: Attributes;
export interface CT_Revisions {
    rrc?: CT_RevisionRowColumn[];
    rm?: CT_RevisionMove[];
    rcv?: CT_RevisionCustomView[];
    rsnm?: CT_RevisionSheetRename[];
    ris?: CT_RevisionInsertSheet[];
    rcc?: CT_RevisionCellChange[];
    rfmt?: CT_RevisionFormatting[];
    raf?: CT_RevisionAutoFormatting[];
    rdn?: CT_RevisionDefinedName[];
    rcmt?: CT_RevisionComment[];
    rqt?: CT_RevisionQueryTableField[];
    rcft?: CT_RevisionConflict[];
}
export declare const CT_Revisions_Attributes: Attributes;
export interface CT_SharedUser {
    extLst?: CT_ExtensionList[];
    guid?: string;
    name?: string;
    id?: number;
    dateTime?: string;
}
export declare const CT_SharedUser_Attributes: Attributes;
export interface CT_Users {
    userInfo?: CT_SharedUser[];
    count?: number;
}
export declare const CT_Users_Attributes: Attributes;
export interface CT_OutlinePr {
    applyStyles?: boolean;
    summaryBelow?: boolean;
    summaryRight?: boolean;
    showOutlineSymbols?: boolean;
}
export declare const CT_OutlinePr_Attributes: Attributes;
export interface CT_PageSetUpPr {
    autoPageBreaks?: boolean;
    fitToPage?: boolean;
}
export declare const CT_PageSetUpPr_Attributes: Attributes;
export interface CT_SheetPr {
    tabColor?: CT_Color;
    outlinePr?: CT_OutlinePr;
    pageSetUpPr?: CT_PageSetUpPr;
    syncHorizontal?: boolean;
    syncVertical?: boolean;
    syncRef?: string;
    transitionEvaluation?: boolean;
    transitionEntry?: boolean;
    published?: boolean;
    codeName?: string;
    filterMode?: boolean;
    enableFormatConditionsCalculation?: boolean;
}
export declare const CT_SheetPr_Attributes: Attributes;
export interface CT_SheetDimension {
    ref?: string;
}
export declare const CT_SheetDimension_Attributes: Attributes;
export type ST_Pane = 'bottomRight' | 'topRight' | 'bottomLeft' | 'topLeft';
export type ST_PaneState = 'split' | 'frozen' | 'frozenSplit';
export interface CT_Pane {
    xSplit?: number;
    ySplit?: number;
    topLeftCell?: string;
    activePane?: ST_Pane;
    state?: ST_PaneState;
}
export declare const CT_Pane_Attributes: Attributes;
export interface CT_Selection {
    pane?: ST_Pane;
    activeCell?: string;
    activeCellId?: number;
    sqref?: string;
}
export declare const CT_Selection_Attributes: Attributes;
export interface CT_PivotSelection {
    'pivotArea'?: CT_PivotArea[];
    'pane'?: ST_Pane;
    'showHeader'?: boolean;
    'label'?: boolean;
    'data'?: boolean;
    'extendable'?: boolean;
    'count'?: number;
    'axis'?: ST_Axis;
    'dimension'?: number;
    'start'?: number;
    'min'?: number;
    'max'?: number;
    'activeRow'?: number;
    'activeCol'?: number;
    'previousRow'?: number;
    'previousCol'?: number;
    'click'?: number;
    'r:id'?: string;
}
export declare const CT_PivotSelection_Attributes: Attributes;
export type ST_SheetViewType = 'normal' | 'pageBreakPreview' | 'pageLayout';
export interface CT_SheetView {
    pane?: CT_Pane;
    selection?: CT_Selection[];
    pivotSelection?: CT_PivotSelection[];
    extLst?: CT_ExtensionList;
    windowProtection?: boolean;
    showFormulas?: boolean;
    showGridLines?: boolean;
    showRowColHeaders?: boolean;
    showZeros?: boolean;
    rightToLeft?: boolean;
    tabSelected?: boolean;
    showRuler?: boolean;
    showOutlineSymbols?: boolean;
    defaultGridColor?: boolean;
    showWhiteSpace?: boolean;
    view?: ST_SheetViewType;
    topLeftCell?: string;
    colorId?: number;
    zoomScale?: number;
    zoomScaleNormal?: number;
    zoomScaleSheetLayoutView?: number;
    zoomScalePageLayoutView?: number;
    workbookViewId?: number;
}
export declare const CT_SheetView_Attributes: Attributes;
export interface CT_SheetViews {
    sheetView?: CT_SheetView[];
    extLst?: CT_ExtensionList;
}
export declare const CT_SheetViews_Attributes: Attributes;
export interface CT_SheetFormatPr {
    baseColWidth?: number;
    defaultColWidth?: number;
    defaultRowHeight?: number;
    customHeight?: boolean;
    zeroHeight?: boolean;
    thickTop?: boolean;
    thickBottom?: boolean;
    outlineLevelRow?: number;
    outlineLevelCol?: number;
}
export declare const CT_SheetFormatPr_Attributes: Attributes;
export interface CT_Col {
    min?: number;
    max?: number;
    width?: number;
    style?: number;
    hidden?: boolean;
    bestFit?: boolean;
    customWidth?: boolean;
    phonetic?: boolean;
    outlineLevel?: number;
    collapsed?: boolean;
}
export declare const CT_Col_Attributes: Attributes;
export interface CT_Cols {
    col?: CT_Col[];
}
export declare const CT_Cols_Attributes: Attributes;
export type ST_CellSpans = ST_CellSpan[];
export interface CT_Row {
    c?: CT_Cell[];
    extLst?: CT_ExtensionList[];
    r?: number;
    spans?: string[];
    s?: number;
    customFormat?: boolean;
    ht?: number;
    hidden?: boolean;
    customHeight?: boolean;
    outlineLevel?: number;
    collapsed?: boolean;
    thickTop?: boolean;
    thickBot?: boolean;
    ph?: boolean;
}
export declare const CT_Row_Attributes: Attributes;
export interface CT_SheetData {
    row?: CT_Row[];
}
export declare const CT_SheetData_Attributes: Attributes;
export interface CT_SheetProtection {
    algorithmName?: string;
    hashValue?: string;
    saltValue?: string;
    spinCount?: number;
    sheet?: boolean;
    objects?: boolean;
    scenarios?: boolean;
    formatCells?: boolean;
    formatColumns?: boolean;
    formatRows?: boolean;
    insertColumns?: boolean;
    insertRows?: boolean;
    insertHyperlinks?: boolean;
    deleteColumns?: boolean;
    deleteRows?: boolean;
    selectLockedCells?: boolean;
    sort?: boolean;
    autoFilter?: boolean;
    pivotTables?: boolean;
    selectUnlockedCells?: boolean;
}
export declare const CT_SheetProtection_Attributes: Attributes;
export interface CT_DataRef {
    'ref'?: string;
    'name'?: string;
    'sheet'?: string;
    'r:id'?: string;
}
export declare const CT_DataRef_Attributes: Attributes;
export interface CT_DataRefs {
    dataRef?: CT_DataRef[];
    count?: number;
}
export declare const CT_DataRefs_Attributes: Attributes;
export interface CT_DataConsolidate {
    dataRefs?: CT_DataRefs;
    function?: ST_DataConsolidateFunction;
    startLabels?: boolean;
    topLabels?: boolean;
    link?: boolean;
}
export declare const CT_DataConsolidate_Attributes: Attributes;
export interface CT_Break {
    id?: number;
    min?: number;
    max?: number;
    man?: boolean;
    pt?: boolean;
}
export declare const CT_Break_Attributes: Attributes;
export interface CT_PageBreak {
    brk?: CT_Break[];
    count?: number;
    manualBreakCount?: number;
}
export declare const CT_PageBreak_Attributes: Attributes;
export interface CT_PageMargins {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
    header?: number;
    footer?: number;
}
export declare const CT_PageMargins_Attributes: Attributes;
export interface CT_PrintOptions {
    horizontalCentered?: boolean;
    verticalCentered?: boolean;
    headings?: boolean;
    gridLines?: boolean;
    gridLinesSet?: boolean;
}
export declare const CT_PrintOptions_Attributes: Attributes;
export type ST_PageOrder = 'downThenOver' | 'overThenDown';
export type ST_Orientation = 'default' | 'portrait' | 'landscape';
export type ST_CellComments = 'none' | 'asDisplayed' | 'atEnd';
export type ST_PrintError = 'displayed' | 'blank' | 'dash' | 'NA';
export interface CT_PageSetup {
    'paperSize'?: number;
    'paperHeight'?: string;
    'paperWidth'?: string;
    'scale'?: number;
    'firstPageNumber'?: number;
    'fitToWidth'?: number;
    'fitToHeight'?: number;
    'pageOrder'?: ST_PageOrder;
    'orientation'?: ST_Orientation;
    'usePrinterDefaults'?: boolean;
    'blackAndWhite'?: boolean;
    'draft'?: boolean;
    'cellComments'?: ST_CellComments;
    'useFirstPageNumber'?: boolean;
    'errors'?: ST_PrintError;
    'horizontalDpi'?: number;
    'verticalDpi'?: number;
    'copies'?: number;
    'r:id'?: string;
}
export declare const CT_PageSetup_Attributes: Attributes;
export interface CT_HeaderFooter {
    oddHeader?: string;
    oddFooter?: string;
    evenHeader?: string;
    evenFooter?: string;
    firstHeader?: string;
    firstFooter?: string;
    differentOddEven?: boolean;
    differentFirst?: boolean;
    scaleWithDoc?: boolean;
    alignWithMargins?: boolean;
}
export declare const CT_HeaderFooter_Attributes: Attributes;
export type ST_SheetState = 'visible' | 'hidden' | 'veryHidden';
export interface CT_CustomSheetView {
    pane?: CT_Pane;
    selection?: CT_Selection;
    rowBreaks?: CT_PageBreak;
    colBreaks?: CT_PageBreak;
    pageMargins?: CT_PageMargins;
    printOptions?: CT_PrintOptions;
    pageSetup?: CT_PageSetup;
    headerFooter?: CT_HeaderFooter;
    autoFilter?: CT_AutoFilter;
    extLst?: CT_ExtensionList[];
    guid?: string;
    scale?: number;
    colorId?: number;
    showPageBreaks?: boolean;
    showFormulas?: boolean;
    showGridLines?: boolean;
    showRowCol?: boolean;
    outlineSymbols?: boolean;
    zeroValues?: boolean;
    fitToPage?: boolean;
    printArea?: boolean;
    filter?: boolean;
    showAutoFilter?: boolean;
    hiddenRows?: boolean;
    hiddenColumns?: boolean;
    state?: ST_SheetState;
    filterUnique?: boolean;
    view?: ST_SheetViewType;
    showRuler?: boolean;
    topLeftCell?: string;
}
export declare const CT_CustomSheetView_Attributes: Attributes;
export interface CT_CustomSheetViews {
    customSheetView?: CT_CustomSheetView[];
}
export declare const CT_CustomSheetViews_Attributes: Attributes;
export type ST_CfvoType = 'num' | 'percent' | 'max' | 'min' | 'formula' | 'percentile';
export interface CT_Cfvo {
    extLst?: CT_ExtensionList;
    type?: ST_CfvoType;
    val?: string;
    gte?: boolean;
}
export declare const CT_Cfvo_Attributes: Attributes;
export interface CT_ColorScale {
    cfvo?: CT_Cfvo[];
    color?: CT_Color[];
}
export declare const CT_ColorScale_Attributes: Attributes;
export interface CT_DataBar {
    cfvo?: CT_Cfvo[];
    color?: CT_Color;
    minLength?: number;
    maxLength?: number;
    showValue?: boolean;
}
export declare const CT_DataBar_Attributes: Attributes;
export interface CT_IconSet {
    cfvo?: CT_Cfvo[];
    iconSet?: ST_IconSetType;
    showValue?: boolean;
    percent?: boolean;
    reverse?: boolean;
}
export declare const CT_IconSet_Attributes: Attributes;
export type ST_CfType = 'expression' | 'cellIs' | 'colorScale' | 'dataBar' | 'iconSet' | 'top10' | 'uniqueValues' | 'duplicateValues' | 'containsText' | 'notContainsText' | 'beginsWith' | 'endsWith' | 'containsBlanks' | 'notContainsBlanks' | 'containsErrors' | 'notContainsErrors' | 'timePeriod' | 'aboveAverage';
export type ST_ConditionalFormattingOperator = 'lessThan' | 'lessThanOrEqual' | 'equal' | 'notEqual' | 'greaterThanOrEqual' | 'greaterThan' | 'between' | 'notBetween' | 'containsText' | 'notContains' | 'beginsWith' | 'endsWith';
export type ST_TimePeriod = 'today' | 'yesterday' | 'tomorrow' | 'last7Days' | 'thisMonth' | 'lastMonth' | 'nextMonth' | 'thisWeek' | 'lastWeek' | 'nextWeek';
export interface CT_CfRule {
    formula?: string[];
    colorScale?: CT_ColorScale;
    dataBar?: CT_DataBar;
    iconSet?: CT_IconSet;
    extLst?: CT_ExtensionList[];
    type?: ST_CfType;
    dxfId?: number;
    priority?: number;
    stopIfTrue?: boolean;
    aboveAverage?: boolean;
    percent?: boolean;
    bottom?: boolean;
    operator?: ST_ConditionalFormattingOperator;
    text?: string;
    timePeriod?: ST_TimePeriod;
    rank?: number;
    stdDev?: number;
    equalAverage?: boolean;
}
export declare const CT_CfRule_Attributes: Attributes;
export interface CT_ConditionalFormatting {
    cfRule?: CT_CfRule[];
    extLst?: CT_ExtensionList[];
    pivot?: boolean;
    sqref?: string;
}
export declare const CT_ConditionalFormatting_Attributes: Attributes;
export interface CT_CustomProperty {
    'name'?: string;
    'r:id'?: string;
}
export declare const CT_CustomProperty_Attributes: Attributes;
export interface CT_CustomProperties {
    customPr?: CT_CustomProperty[];
}
export declare const CT_CustomProperties_Attributes: Attributes;
export interface CT_Drawing {
    'r:id'?: string;
}
export declare const CT_Drawing_Attributes: Attributes;
export interface CT_DrawingHF {
    'r:id'?: string;
    'lho'?: number;
    'lhe'?: number;
    'lhf'?: number;
    'cho'?: number;
    'che'?: number;
    'chf'?: number;
    'rho'?: number;
    'rhe'?: number;
    'rhf'?: number;
    'lfo'?: number;
    'lfe'?: number;
    'lff'?: number;
    'cfo'?: number;
    'cfe'?: number;
    'cff'?: number;
    'rfo'?: number;
    'rfe'?: number;
    'rff'?: number;
}
export declare const CT_DrawingHF_Attributes: Attributes;
export interface CT_SheetBackgroundPicture {
    'r:id'?: string;
}
export declare const CT_SheetBackgroundPicture_Attributes: Attributes;
export interface CT_ObjectPr {
    'anchor'?: CT_ObjectAnchor;
    'locked'?: boolean;
    'defaultSize'?: boolean;
    'print'?: boolean;
    'disabled'?: boolean;
    'uiObject'?: boolean;
    'autoFill'?: boolean;
    'autoLine'?: boolean;
    'autoPict'?: boolean;
    'macro'?: string;
    'altText'?: string;
    'dde'?: boolean;
    'r:id'?: string;
}
export declare const CT_ObjectPr_Attributes: Attributes;
export type ST_DvAspect = 'DVASPECT_CONTENT' | 'DVASPECT_ICON';
export type ST_OleUpdate = 'OLEUPDATE_ALWAYS' | 'OLEUPDATE_ONCALL';
export interface CT_OleObject {
    'objectPr'?: CT_ObjectPr;
    'progId'?: string;
    'dvAspect'?: ST_DvAspect;
    'link'?: string;
    'oleUpdate'?: ST_OleUpdate;
    'autoLoad'?: boolean;
    'shapeId'?: number;
    'r:id'?: string;
}
export declare const CT_OleObject_Attributes: Attributes;
export interface CT_OleObjects {
    oleObject?: CT_OleObject[];
}
export declare const CT_OleObjects_Attributes: Attributes;
export interface CT_Macrosheet {
    sheetPr?: CT_SheetPr;
    dimension?: CT_SheetDimension;
    sheetViews?: CT_SheetViews;
    sheetFormatPr?: CT_SheetFormatPr;
    cols?: CT_Cols[];
    sheetData?: CT_SheetData;
    sheetProtection?: CT_SheetProtection;
    autoFilter?: CT_AutoFilter;
    sortState?: CT_SortState;
    dataConsolidate?: CT_DataConsolidate;
    customSheetViews?: CT_CustomSheetViews;
    phoneticPr?: CT_PhoneticPr;
    conditionalFormatting?: CT_ConditionalFormatting[];
    printOptions?: CT_PrintOptions;
    pageMargins?: CT_PageMargins;
    pageSetup?: CT_PageSetup;
    headerFooter?: CT_HeaderFooter;
    rowBreaks?: CT_PageBreak;
    colBreaks?: CT_PageBreak;
    customProperties?: CT_CustomProperties;
    drawing?: CT_Drawing;
    drawingHF?: CT_DrawingHF;
    picture?: CT_SheetBackgroundPicture;
    oleObjects?: CT_OleObjects;
    extLst?: CT_ExtensionList[];
}
export declare const CT_Macrosheet_Attributes: Attributes;
export interface CT_ControlPr {
    'anchor'?: CT_ObjectAnchor;
    'locked'?: boolean;
    'defaultSize'?: boolean;
    'print'?: boolean;
    'disabled'?: boolean;
    'recalcAlways'?: boolean;
    'uiObject'?: boolean;
    'autoFill'?: boolean;
    'autoLine'?: boolean;
    'autoPict'?: boolean;
    'macro'?: string;
    'altText'?: string;
    'linkedCell'?: string;
    'listFillRange'?: string;
    'cf'?: string;
    'r:id'?: string;
}
export declare const CT_ControlPr_Attributes: Attributes;
export interface CT_Control {
    'controlPr'?: CT_ControlPr;
    'shapeId'?: number;
    'r:id'?: string;
    'name'?: string;
}
export declare const CT_Control_Attributes: Attributes;
export interface CT_Controls {
    control?: CT_Control[];
}
export declare const CT_Controls_Attributes: Attributes;
export interface CT_Dialogsheet {
    sheetPr?: CT_SheetPr[];
    sheetViews?: CT_SheetViews[];
    sheetFormatPr?: CT_SheetFormatPr[];
    sheetProtection?: CT_SheetProtection;
    customSheetViews?: CT_CustomSheetViews[];
    printOptions?: CT_PrintOptions[];
    pageMargins?: CT_PageMargins[];
    pageSetup?: CT_PageSetup[];
    headerFooter?: CT_HeaderFooter[];
    drawing?: CT_Drawing[];
    drawingHF?: CT_DrawingHF;
    oleObjects?: CT_OleObjects;
    controls?: CT_Controls;
    extLst?: CT_ExtensionList[];
}
export declare const CT_Dialogsheet_Attributes: Attributes;
export interface CT_SheetCalcPr {
    fullCalcOnLoad?: boolean;
}
export declare const CT_SheetCalcPr_Attributes: Attributes;
export interface CT_ProtectedRange {
    securityDescriptor?: string[];
    sqref?: string;
    name?: string;
    algorithmName?: string;
    hashValue?: string;
    saltValue?: string;
    spinCount?: number;
}
export declare const CT_ProtectedRange_Attributes: Attributes;
export interface CT_ProtectedRanges {
    protectedRange?: CT_ProtectedRange[];
}
export declare const CT_ProtectedRanges_Attributes: Attributes;
export interface CT_InputCells {
    r?: string;
    deleted?: boolean;
    undone?: boolean;
    val?: string;
    numFmtId?: number;
}
export declare const CT_InputCells_Attributes: Attributes;
export interface CT_Scenario {
    inputCells?: CT_InputCells[];
    name?: string;
    locked?: boolean;
    hidden?: boolean;
    count?: number;
    user?: string;
    comment?: string;
}
export declare const CT_Scenario_Attributes: Attributes;
export interface CT_Scenarios {
    scenario?: CT_Scenario[];
    current?: number;
    show?: number;
    sqref?: string;
}
export declare const CT_Scenarios_Attributes: Attributes;
export interface CT_MergeCell {
    ref?: string;
}
export declare const CT_MergeCell_Attributes: Attributes;
export interface CT_MergeCells {
    mergeCell?: CT_MergeCell[];
    count?: number;
}
export declare const CT_MergeCells_Attributes: Attributes;
export type ST_DataValidationType = 'none' | 'whole' | 'decimal' | 'list' | 'date' | 'time' | 'textLength' | 'custom';
export type ST_DataValidationErrorStyle = 'stop' | 'warning' | 'information';
export type ST_DataValidationImeMode = 'noControl' | 'off' | 'on' | 'disabled' | 'hiragana' | 'fullKatakana' | 'halfKatakana' | 'fullAlpha' | 'halfAlpha' | 'fullHangul' | 'halfHangul';
export type ST_DataValidationOperator = 'between' | 'notBetween' | 'equal' | 'notEqual' | 'lessThan' | 'lessThanOrEqual' | 'greaterThan' | 'greaterThanOrEqual';
export interface CT_DataValidation {
    formula1?: string;
    formula2?: string;
    type?: ST_DataValidationType;
    errorStyle?: ST_DataValidationErrorStyle;
    imeMode?: ST_DataValidationImeMode;
    operator?: ST_DataValidationOperator;
    allowBlank?: boolean;
    showDropDown?: boolean;
    showInputMessage?: boolean;
    showErrorMessage?: boolean;
    errorTitle?: string;
    error?: string;
    promptTitle?: string;
    prompt?: string;
    sqref?: string;
}
export declare const CT_DataValidation_Attributes: Attributes;
export interface CT_DataValidations {
    dataValidation?: CT_DataValidation[];
    disablePrompts?: boolean;
    xWindow?: number;
    yWindow?: number;
    count?: number;
}
export declare const CT_DataValidations_Attributes: Attributes;
export interface CT_Hyperlinks {
    hyperlink?: CT_Hyperlink[];
}
export declare const CT_Hyperlinks_Attributes: Attributes;
export interface CT_CellWatch {
    r?: string;
}
export declare const CT_CellWatch_Attributes: Attributes;
export interface CT_CellWatches {
    cellWatch?: CT_CellWatch[];
}
export declare const CT_CellWatches_Attributes: Attributes;
export interface CT_IgnoredError {
    sqref?: string;
    evalError?: boolean;
    twoDigitTextYear?: boolean;
    numberStoredAsText?: boolean;
    formula?: boolean;
    formulaRange?: boolean;
    unlockedFormula?: boolean;
    emptyCellReference?: boolean;
    listDataValidation?: boolean;
    calculatedColumn?: boolean;
}
export declare const CT_IgnoredError_Attributes: Attributes;
export interface CT_IgnoredErrors {
    ignoredError?: CT_IgnoredError[];
    extLst?: CT_ExtensionList;
}
export declare const CT_IgnoredErrors_Attributes: Attributes;
export interface CT_CellSmartTagPr {
    key?: string;
    val?: string;
}
export declare const CT_CellSmartTagPr_Attributes: Attributes;
export interface CT_CellSmartTag {
    cellSmartTagPr?: CT_CellSmartTagPr[];
    type?: number;
    deleted?: boolean;
    xmlBased?: boolean;
}
export declare const CT_CellSmartTag_Attributes: Attributes;
export interface CT_CellSmartTags {
    cellSmartTag?: CT_CellSmartTag[];
    r?: string;
}
export declare const CT_CellSmartTags_Attributes: Attributes;
export interface CT_SmartTags {
    cellSmartTags?: CT_CellSmartTags[];
}
export declare const CT_SmartTags_Attributes: Attributes;
export type ST_WebSourceType = 'sheet' | 'printArea' | 'autoFilter' | 'range' | 'chart' | 'pivotTable' | 'query' | 'label';
export interface CT_WebPublishItem {
    id?: number;
    divId?: string;
    sourceType?: ST_WebSourceType;
    sourceRef?: string;
    sourceObject?: string;
    destinationFile?: string;
    title?: string;
    autoRepublish?: boolean;
}
export declare const CT_WebPublishItem_Attributes: Attributes;
export interface CT_WebPublishItems {
    webPublishItem?: CT_WebPublishItem[];
    count?: number;
}
export declare const CT_WebPublishItems_Attributes: Attributes;
export interface CT_TablePart {
    'r:id'?: string;
}
export declare const CT_TablePart_Attributes: Attributes;
export interface CT_TableParts {
    tablePart?: CT_TablePart[];
    count?: number;
}
export declare const CT_TableParts_Attributes: Attributes;
export interface CT_Worksheet {
    sheetPr?: CT_SheetPr;
    dimension?: CT_SheetDimension;
    sheetViews?: CT_SheetViews;
    sheetFormatPr?: CT_SheetFormatPr;
    cols?: CT_Cols[];
    sheetData?: CT_SheetData;
    sheetCalcPr?: CT_SheetCalcPr;
    sheetProtection?: CT_SheetProtection;
    protectedRanges?: CT_ProtectedRanges;
    scenarios?: CT_Scenarios;
    autoFilter?: CT_AutoFilter;
    sortState?: CT_SortState;
    dataConsolidate?: CT_DataConsolidate;
    customSheetViews?: CT_CustomSheetViews;
    mergeCells?: CT_MergeCells;
    phoneticPr?: CT_PhoneticPr;
    conditionalFormatting?: CT_ConditionalFormatting[];
    dataValidations?: CT_DataValidations;
    hyperlinks?: CT_Hyperlinks;
    printOptions?: CT_PrintOptions;
    pageMargins?: CT_PageMargins;
    pageSetup?: CT_PageSetup;
    headerFooter?: CT_HeaderFooter;
    rowBreaks?: CT_PageBreak;
    colBreaks?: CT_PageBreak;
    customProperties?: CT_CustomProperties;
    cellWatches?: CT_CellWatches;
    ignoredErrors?: CT_IgnoredErrors;
    smartTags?: CT_SmartTags;
    drawing?: CT_Drawing;
    drawingHF?: CT_DrawingHF;
    picture?: CT_SheetBackgroundPicture;
    oleObjects?: CT_OleObjects;
    controls?: CT_Controls;
    webPublishItems?: CT_WebPublishItems;
    tableParts?: CT_TableParts;
    extLst?: CT_ExtensionList;
}
export declare const CT_Worksheet_Attributes: Attributes;
export type ST_CellSpan = string;
export type ST_CellFormulaType = 'normal' | 'array' | 'dataTable' | 'shared';
export interface CT_ChartsheetPr {
    tabColor?: CT_Color;
    published?: boolean;
    codeName?: string;
}
export declare const CT_ChartsheetPr_Attributes: Attributes;
export interface CT_ChartsheetView {
    extLst?: CT_ExtensionList;
    tabSelected?: boolean;
    zoomScale?: number;
    workbookViewId?: number;
    zoomToFit?: boolean;
}
export declare const CT_ChartsheetView_Attributes: Attributes;
export interface CT_ChartsheetViews {
    sheetView?: CT_ChartsheetView[];
    extLst?: CT_ExtensionList;
}
export declare const CT_ChartsheetViews_Attributes: Attributes;
export interface CT_ChartsheetProtection {
    algorithmName?: string;
    hashValue?: string;
    saltValue?: string;
    spinCount?: number;
    content?: boolean;
    objects?: boolean;
}
export declare const CT_ChartsheetProtection_Attributes: Attributes;
export interface CT_CsPageSetup {
    'paperSize'?: number;
    'paperHeight'?: string;
    'paperWidth'?: string;
    'firstPageNumber'?: number;
    'orientation'?: ST_Orientation;
    'usePrinterDefaults'?: boolean;
    'blackAndWhite'?: boolean;
    'draft'?: boolean;
    'useFirstPageNumber'?: boolean;
    'horizontalDpi'?: number;
    'verticalDpi'?: number;
    'copies'?: number;
    'r:id'?: string;
}
export declare const CT_CsPageSetup_Attributes: Attributes;
export interface CT_CustomChartsheetView {
    pageMargins?: CT_PageMargins;
    pageSetup?: CT_CsPageSetup;
    headerFooter?: CT_HeaderFooter;
    guid?: string;
    scale?: number;
    state?: ST_SheetState;
    zoomToFit?: boolean;
}
export declare const CT_CustomChartsheetView_Attributes: Attributes;
export interface CT_CustomChartsheetViews {
    customSheetView?: CT_CustomChartsheetView[];
}
export declare const CT_CustomChartsheetViews_Attributes: Attributes;
export interface CT_Chartsheet {
    sheetPr?: CT_ChartsheetPr;
    sheetViews?: CT_ChartsheetViews;
    sheetProtection?: CT_ChartsheetProtection;
    customSheetViews?: CT_CustomChartsheetViews;
    pageMargins?: CT_PageMargins[];
    pageSetup?: CT_CsPageSetup;
    headerFooter?: CT_HeaderFooter[];
    drawing?: CT_Drawing;
    drawingHF?: CT_DrawingHF;
    picture?: CT_SheetBackgroundPicture;
    webPublishItems?: CT_WebPublishItems;
    extLst?: CT_ExtensionList;
}
export declare const CT_Chartsheet_Attributes: Attributes;
export interface CT_MetadataType {
    name?: string;
    minSupportedVersion?: number;
    ghostRow?: boolean;
    ghostCol?: boolean;
    edit?: boolean;
    delete?: boolean;
    copy?: boolean;
    pasteAll?: boolean;
    pasteFormulas?: boolean;
    pasteValues?: boolean;
    pasteFormats?: boolean;
    pasteComments?: boolean;
    pasteDataValidation?: boolean;
    pasteBorders?: boolean;
    pasteColWidths?: boolean;
    pasteNumberFormats?: boolean;
    merge?: boolean;
    splitFirst?: boolean;
    splitAll?: boolean;
    rowColShift?: boolean;
    clearAll?: boolean;
    clearFormats?: boolean;
    clearContents?: boolean;
    clearComments?: boolean;
    assign?: boolean;
    coerce?: boolean;
    adjust?: boolean;
    cellMeta?: boolean;
}
export declare const CT_MetadataType_Attributes: Attributes;
export interface CT_MetadataTypes {
    metadataType?: CT_MetadataType[];
    count?: number;
}
export declare const CT_MetadataTypes_Attributes: Attributes;
export interface CT_MetadataStrings {
    s?: CT_XStringElement[];
    count?: number;
}
export declare const CT_MetadataStrings_Attributes: Attributes;
export interface CT_MetadataStringIndex {
    x?: number;
    s?: boolean;
}
export declare const CT_MetadataStringIndex_Attributes: Attributes;
export interface CT_MdxTuple {
    n?: CT_MetadataStringIndex[];
    c?: number;
    ct?: string;
    si?: number;
    fi?: number;
    bc?: string;
    fc?: string;
    i?: boolean;
    u?: boolean;
    st?: boolean;
    b?: boolean;
}
export declare const CT_MdxTuple_Attributes: Attributes;
export type ST_MdxSetOrder = 'u' | 'a' | 'd' | 'aa' | 'ad' | 'na' | 'nd';
export interface CT_MdxSet {
    n?: CT_MetadataStringIndex[];
    ns?: number;
    c?: number;
    o?: ST_MdxSetOrder;
}
export declare const CT_MdxSet_Attributes: Attributes;
export interface CT_MdxMemeberProp {
    n?: number;
    np?: number;
}
export declare const CT_MdxMemeberProp_Attributes: Attributes;
export type ST_MdxKPIProperty = 'v' | 'g' | 's' | 't' | 'w' | 'm';
export interface CT_MdxKPI {
    n?: number;
    np?: number;
    p?: ST_MdxKPIProperty;
}
export declare const CT_MdxKPI_Attributes: Attributes;
export type ST_MdxFunctionType = 'm' | 'v' | 's' | 'c' | 'r' | 'p' | 'k';
export interface CT_Mdx {
    t?: CT_MdxTuple[];
    ms?: CT_MdxSet[];
    p?: CT_MdxMemeberProp[];
    k?: CT_MdxKPI[];
    n?: number;
    f?: ST_MdxFunctionType;
}
export declare const CT_Mdx_Attributes: Attributes;
export interface CT_MdxMetadata {
    mdx?: CT_Mdx[];
    count?: number;
}
export declare const CT_MdxMetadata_Attributes: Attributes;
export interface CT_FutureMetadataBlock {
    extLst?: CT_ExtensionList;
}
export declare const CT_FutureMetadataBlock_Attributes: Attributes;
export interface CT_FutureMetadata {
    bk?: CT_FutureMetadataBlock[];
    extLst?: CT_ExtensionList;
    name?: string;
    count?: number;
}
export declare const CT_FutureMetadata_Attributes: Attributes;
export interface CT_MetadataRecord {
    t?: number;
    v?: number;
}
export declare const CT_MetadataRecord_Attributes: Attributes;
export interface CT_MetadataBlock {
    rc?: CT_MetadataRecord[];
}
export declare const CT_MetadataBlock_Attributes: Attributes;
export interface CT_MetadataBlocks {
    bk?: CT_MetadataBlock[];
    count?: number;
}
export declare const CT_MetadataBlocks_Attributes: Attributes;
export interface CT_Metadata {
    metadataTypes?: CT_MetadataTypes;
    metadataStrings?: CT_MetadataStrings;
    mdxMetadata?: CT_MdxMetadata;
    futureMetadata?: CT_FutureMetadata[];
    cellMetadata?: CT_MetadataBlocks;
    valueMetadata?: CT_MetadataBlocks;
    extLst?: CT_ExtensionList;
}
export declare const CT_Metadata_Attributes: Attributes;
export type ST_XmlDataType = string;
export interface CT_XmlPr {
    extLst?: CT_ExtensionList;
    mapId?: number;
    xpath?: string;
    xmlDataType?: string;
}
export declare const CT_XmlPr_Attributes: Attributes;
export interface CT_XmlCellPr {
    xmlPr?: CT_XmlPr;
    extLst?: CT_ExtensionList;
    id?: number;
    uniqueName?: string;
}
export declare const CT_XmlCellPr_Attributes: Attributes;
export interface CT_SingleXmlCell {
    xmlCellPr?: CT_XmlCellPr;
    extLst?: CT_ExtensionList;
    id?: number;
    r?: string;
    connectionId?: number;
}
export declare const CT_SingleXmlCell_Attributes: Attributes;
export interface CT_SingleXmlCells {
    singleXmlCell?: CT_SingleXmlCell[];
}
export declare const CT_SingleXmlCells_Attributes: Attributes;
export interface CT_NumFmts {
    numFmt?: CT_NumFmt[];
    count?: number;
}
export declare const CT_NumFmts_Attributes: Attributes;
export interface CT_Fonts {
    font?: CT_Font[];
    count?: number;
}
export declare const CT_Fonts_Attributes: Attributes;
export interface CT_Fills {
    fill?: CT_Fill[];
    count?: number;
}
export declare const CT_Fills_Attributes: Attributes;
export interface CT_Borders {
    border?: CT_Border[];
    count?: number;
}
export declare const CT_Borders_Attributes: Attributes;
export type ST_FillId = number;
export type ST_BorderId = number;
export type ST_CellStyleXfId = number;
export interface CT_Xf {
    alignment?: CT_CellAlignment;
    protection?: CT_CellProtection;
    extLst?: CT_ExtensionList;
    numFmtId?: number;
    fontId?: number;
    fillId?: number;
    borderId?: number;
    xfId?: number;
    quotePrefix?: boolean;
    pivotButton?: boolean;
    applyNumberFormat?: boolean;
    applyFont?: boolean;
    applyFill?: boolean;
    applyBorder?: boolean;
    applyAlignment?: boolean;
    applyProtection?: boolean;
}
export declare const CT_Xf_Attributes: Attributes;
export interface CT_CellStyleXfs {
    xf?: CT_Xf[];
    count?: number;
}
export declare const CT_CellStyleXfs_Attributes: Attributes;
export interface CT_CellXfs {
    xf?: CT_Xf[];
    count?: number;
}
export declare const CT_CellXfs_Attributes: Attributes;
export interface CT_CellStyle {
    extLst?: CT_ExtensionList;
    name?: string;
    xfId?: number;
    builtinId?: number;
    iLevel?: number;
    hidden?: boolean;
    customBuiltin?: boolean;
}
export declare const CT_CellStyle_Attributes: Attributes;
export interface CT_CellStyles {
    cellStyle?: CT_CellStyle[];
    count?: number;
}
export declare const CT_CellStyles_Attributes: Attributes;
export interface CT_Dxfs {
    dxf?: CT_Dxf[];
    count?: number;
}
export declare const CT_Dxfs_Attributes: Attributes;
export interface CT_TableStyles {
    tableStyle?: CT_TableStyle[];
    count?: number;
    defaultTableStyle?: string;
    defaultPivotStyle?: string;
}
export declare const CT_TableStyles_Attributes: Attributes;
export interface CT_RgbColor {
    rgb?: string;
}
export declare const CT_RgbColor_Attributes: Attributes;
export interface CT_IndexedColors {
    rgbColor?: CT_RgbColor[];
}
export declare const CT_IndexedColors_Attributes: Attributes;
export interface CT_MRUColors {
    color?: CT_Color[];
}
export declare const CT_MRUColors_Attributes: Attributes;
export interface CT_Colors {
    indexedColors?: CT_IndexedColors;
    mruColors?: CT_MRUColors;
}
export declare const CT_Colors_Attributes: Attributes;
export interface CT_Stylesheet {
    numFmts?: CT_NumFmts;
    fonts?: CT_Fonts;
    fills?: CT_Fills;
    borders?: CT_Borders;
    cellStyleXfs?: CT_CellStyleXfs;
    cellXfs?: CT_CellXfs;
    cellStyles?: CT_CellStyles;
    dxfs?: CT_Dxfs;
    tableStyles?: CT_TableStyles;
    colors?: CT_Colors;
    extLst?: CT_ExtensionList;
}
export declare const CT_Stylesheet_Attributes: Attributes;
export type ST_TextRotation = undefined;
export interface CT_ExternalSheetName {
    val?: string;
}
export declare const CT_ExternalSheetName_Attributes: Attributes;
export interface CT_ExternalSheetNames {
    sheetName?: CT_ExternalSheetName[];
}
export declare const CT_ExternalSheetNames_Attributes: Attributes;
export interface CT_ExternalDefinedName {
    name?: string;
    refersTo?: string;
    sheetId?: number;
}
export declare const CT_ExternalDefinedName_Attributes: Attributes;
export interface CT_ExternalDefinedNames {
    definedName?: CT_ExternalDefinedName[];
}
export declare const CT_ExternalDefinedNames_Attributes: Attributes;
export interface CT_ExternalCell {
    v?: string;
    r?: string;
    t?: ST_CellType;
    vm?: number;
}
export declare const CT_ExternalCell_Attributes: Attributes;
export interface CT_ExternalRow {
    cell?: CT_ExternalCell[];
    r?: number;
}
export declare const CT_ExternalRow_Attributes: Attributes;
export interface CT_ExternalSheetData {
    row?: CT_ExternalRow[];
    sheetId?: number;
    refreshError?: boolean;
}
export declare const CT_ExternalSheetData_Attributes: Attributes;
export interface CT_ExternalSheetDataSet {
    sheetData?: CT_ExternalSheetData[];
}
export declare const CT_ExternalSheetDataSet_Attributes: Attributes;
export interface CT_ExternalBook {
    'sheetNames'?: CT_ExternalSheetNames;
    'definedNames'?: CT_ExternalDefinedNames;
    'sheetDataSet'?: CT_ExternalSheetDataSet;
    'r:id'?: string;
}
export declare const CT_ExternalBook_Attributes: Attributes;
export type ST_DdeValueType = 'nil' | 'b' | 'n' | 'e' | 'str';
export interface CT_DdeValue {
    val?: string;
    t?: ST_DdeValueType;
}
export declare const CT_DdeValue_Attributes: Attributes;
export interface CT_DdeValues {
    value?: CT_DdeValue[];
    rows?: number;
    cols?: number;
}
export declare const CT_DdeValues_Attributes: Attributes;
export interface CT_DdeItem {
    values?: CT_DdeValues;
    name?: string;
    ole?: boolean;
    advise?: boolean;
    preferPic?: boolean;
}
export declare const CT_DdeItem_Attributes: Attributes;
export interface CT_DdeItems {
    ddeItem?: CT_DdeItem[];
}
export declare const CT_DdeItems_Attributes: Attributes;
export interface CT_DdeLink {
    ddeItems?: CT_DdeItems;
    ddeService?: string;
    ddeTopic?: string;
}
export declare const CT_DdeLink_Attributes: Attributes;
export interface CT_OleItem {
    name?: string;
    icon?: boolean;
    advise?: boolean;
    preferPic?: boolean;
}
export declare const CT_OleItem_Attributes: Attributes;
export interface CT_OleItems {
    oleItem?: CT_OleItem[];
}
export declare const CT_OleItems_Attributes: Attributes;
export interface CT_OleLink {
    'oleItems'?: CT_OleItems;
    'r:id'?: string;
    'progId'?: string;
}
export declare const CT_OleLink_Attributes: Attributes;
export interface CT_ExternalLink {
    externalBook?: CT_ExternalBook;
    ddeLink?: CT_DdeLink;
    oleLink?: CT_OleLink;
    extLst?: CT_ExtensionList[];
}
export declare const CT_ExternalLink_Attributes: Attributes;
export interface CT_TableFormula {
}
export declare const CT_TableFormula_Attributes: Attributes;
export interface CT_XmlColumnPr {
    extLst?: CT_ExtensionList;
    mapId?: number;
    xpath?: string;
    denormalized?: boolean;
    xmlDataType?: string;
}
export declare const CT_XmlColumnPr_Attributes: Attributes;
export type ST_TotalsRowFunction = 'none' | 'sum' | 'min' | 'max' | 'average' | 'count' | 'countNums' | 'stdDev' | 'var' | 'custom';
export interface CT_TableColumn {
    calculatedColumnFormula?: CT_TableFormula;
    totalsRowFormula?: CT_TableFormula;
    xmlColumnPr?: CT_XmlColumnPr;
    extLst?: CT_ExtensionList;
    id?: number;
    uniqueName?: string;
    name?: string;
    totalsRowFunction?: ST_TotalsRowFunction;
    totalsRowLabel?: string;
    queryTableFieldId?: number;
    headerRowDxfId?: number;
    dataDxfId?: number;
    totalsRowDxfId?: number;
    headerRowCellStyle?: string;
    dataCellStyle?: string;
    totalsRowCellStyle?: string;
}
export declare const CT_TableColumn_Attributes: Attributes;
export interface CT_TableColumns {
    tableColumn?: CT_TableColumn[];
    count?: number;
}
export declare const CT_TableColumns_Attributes: Attributes;
export interface CT_TableStyleInfo {
    name?: string;
    showFirstColumn?: boolean;
    showLastColumn?: boolean;
    showRowStripes?: boolean;
    showColumnStripes?: boolean;
}
export declare const CT_TableStyleInfo_Attributes: Attributes;
export type ST_TableType = 'worksheet' | 'xml' | 'queryTable';
export interface CT_Table {
    autoFilter?: CT_AutoFilter;
    sortState?: CT_SortState;
    tableColumns?: CT_TableColumns;
    tableStyleInfo?: CT_TableStyleInfo;
    extLst?: CT_ExtensionList;
    id?: number;
    name?: string;
    displayName?: string;
    comment?: string;
    ref?: string;
    tableType?: ST_TableType;
    headerRowCount?: number;
    insertRow?: boolean;
    insertRowShift?: boolean;
    totalsRowCount?: number;
    totalsRowShown?: boolean;
    published?: boolean;
    headerRowDxfId?: number;
    dataDxfId?: number;
    totalsRowDxfId?: number;
    headerRowBorderDxfId?: number;
    tableBorderDxfId?: number;
    totalsRowBorderDxfId?: number;
    headerRowCellStyle?: string;
    dataCellStyle?: string;
    totalsRowCellStyle?: string;
    connectionId?: number;
}
export declare const CT_Table_Attributes: Attributes;
export interface CT_VolTopicRef {
    r?: string;
    s?: number;
}
export declare const CT_VolTopicRef_Attributes: Attributes;
export type ST_VolValueType = 'b' | 'n' | 'e' | 's';
export interface CT_VolTopic {
    v?: string;
    stp?: string[];
    tr?: CT_VolTopicRef[];
    t?: ST_VolValueType;
}
export declare const CT_VolTopic_Attributes: Attributes;
export interface CT_VolMain {
    tp?: CT_VolTopic[];
    first?: string;
}
export declare const CT_VolMain_Attributes: Attributes;
export type ST_VolDepType = 'realTimeData' | 'olapFunctions';
export interface CT_VolType {
    main?: CT_VolMain[];
    type?: ST_VolDepType;
}
export declare const CT_VolType_Attributes: Attributes;
export interface CT_VolTypes {
    volType?: CT_VolType[];
    extLst?: CT_ExtensionList[];
}
export declare const CT_VolTypes_Attributes: Attributes;
export interface CT_FileVersion {
    appName?: string;
    lastEdited?: string;
    lowestEdited?: string;
    rupBuild?: string;
    codeName?: string;
}
export declare const CT_FileVersion_Attributes: Attributes;
export interface CT_FileSharing {
    readOnlyRecommended?: boolean;
    userName?: string;
    algorithmName?: string;
    hashValue?: string;
    saltValue?: string;
    spinCount?: number;
}
export declare const CT_FileSharing_Attributes: Attributes;
export type ST_Objects = 'all' | 'placeholders' | 'none';
export type ST_UpdateLinks = 'userSet' | 'never' | 'always';
export interface CT_WorkbookPr {
    date1904?: boolean;
    showObjects?: ST_Objects;
    showBorderUnselectedTables?: boolean;
    filterPrivacy?: boolean;
    promptedSolutions?: boolean;
    showInkAnnotation?: boolean;
    backupFile?: boolean;
    saveExternalLinkValues?: boolean;
    updateLinks?: ST_UpdateLinks;
    codeName?: string;
    hidePivotFieldList?: boolean;
    showPivotChartFilter?: boolean;
    allowRefreshQuery?: boolean;
    publishItems?: boolean;
    checkCompatibility?: boolean;
    autoCompressPictures?: boolean;
    refreshAllConnections?: boolean;
    defaultThemeVersion?: number;
}
export declare const CT_WorkbookPr_Attributes: Attributes;
export interface CT_WorkbookProtection {
    lockStructure?: boolean;
    lockWindows?: boolean;
    lockRevision?: boolean;
    revisionsAlgorithmName?: string;
    revisionsHashValue?: string;
    revisionsSaltValue?: string;
    revisionsSpinCount?: number;
    workbookAlgorithmName?: string;
    workbookHashValue?: string;
    workbookSaltValue?: string;
    workbookSpinCount?: number;
}
export declare const CT_WorkbookProtection_Attributes: Attributes;
export type ST_Visibility = 'visible' | 'hidden' | 'veryHidden';
export interface CT_BookView {
    extLst?: CT_ExtensionList;
    visibility?: ST_Visibility;
    minimized?: boolean;
    showHorizontalScroll?: boolean;
    showVerticalScroll?: boolean;
    showSheetTabs?: boolean;
    xWindow?: number;
    yWindow?: number;
    windowWidth?: number;
    windowHeight?: number;
    tabRatio?: number;
    firstSheet?: number;
    activeTab?: number;
    autoFilterDateGrouping?: boolean;
}
export declare const CT_BookView_Attributes: Attributes;
export interface CT_BookViews {
    workbookView?: CT_BookView[];
}
export declare const CT_BookViews_Attributes: Attributes;
export interface CT_Sheet {
    'name'?: string;
    'sheetId'?: number;
    'state'?: ST_SheetState;
    'r:id'?: string;
}
export declare const CT_Sheet_Attributes: Attributes;
export interface CT_Sheets {
    sheet?: CT_Sheet[];
}
export declare const CT_Sheets_Attributes: Attributes;
export interface CT_FunctionGroup {
    name?: string;
}
export declare const CT_FunctionGroup_Attributes: Attributes;
export interface CT_FunctionGroups {
    functionGroup?: CT_FunctionGroup[];
    builtInGroupCount?: number;
}
export declare const CT_FunctionGroups_Attributes: Attributes;
export interface CT_ExternalReference {
    'r:id'?: string;
}
export declare const CT_ExternalReference_Attributes: Attributes;
export interface CT_ExternalReferences {
    externalReference?: CT_ExternalReference[];
}
export declare const CT_ExternalReferences_Attributes: Attributes;
export interface CT_DefinedName {
}
export declare const CT_DefinedName_Attributes: Attributes;
export interface CT_DefinedNames {
    definedName?: CT_DefinedName[];
}
export declare const CT_DefinedNames_Attributes: Attributes;
export type ST_CalcMode = 'manual' | 'auto' | 'autoNoTable';
export type ST_RefMode = 'A1' | 'R1C1';
export interface CT_CalcPr {
    calcId?: number;
    calcMode?: ST_CalcMode;
    fullCalcOnLoad?: boolean;
    refMode?: ST_RefMode;
    iterate?: boolean;
    iterateCount?: number;
    iterateDelta?: number;
    fullPrecision?: boolean;
    calcCompleted?: boolean;
    calcOnSave?: boolean;
    concurrentCalc?: boolean;
    concurrentManualCount?: number;
    forceFullCalc?: boolean;
}
export declare const CT_CalcPr_Attributes: Attributes;
export interface CT_OleSize {
    ref?: string;
}
export declare const CT_OleSize_Attributes: Attributes;
export type ST_Comments = 'commNone' | 'commIndicator' | 'commIndAndComment';
export interface CT_CustomWorkbookView {
    extLst?: CT_ExtensionList[];
    name?: string;
    guid?: string;
    autoUpdate?: boolean;
    mergeInterval?: number;
    changesSavedWin?: boolean;
    onlySync?: boolean;
    personalView?: boolean;
    includePrintSettings?: boolean;
    includeHiddenRowCol?: boolean;
    maximized?: boolean;
    minimized?: boolean;
    showHorizontalScroll?: boolean;
    showVerticalScroll?: boolean;
    showSheetTabs?: boolean;
    xWindow?: number;
    yWindow?: number;
    windowWidth?: number;
    windowHeight?: number;
    tabRatio?: number;
    activeSheetId?: number;
    showFormulaBar?: boolean;
    showStatusbar?: boolean;
    showComments?: ST_Comments;
    showObjects?: ST_Objects;
}
export declare const CT_CustomWorkbookView_Attributes: Attributes;
export interface CT_CustomWorkbookViews {
    customWorkbookView?: CT_CustomWorkbookView[];
}
export declare const CT_CustomWorkbookViews_Attributes: Attributes;
export interface CT_PivotCache {
    'cacheId'?: number;
    'r:id'?: string;
}
export declare const CT_PivotCache_Attributes: Attributes;
export interface CT_PivotCaches {
    pivotCache?: CT_PivotCache[];
}
export declare const CT_PivotCaches_Attributes: Attributes;
export type ST_SmartTagShow = 'all' | 'none' | 'noIndicator';
export interface CT_SmartTagPr {
    embed?: boolean;
    show?: ST_SmartTagShow;
}
export declare const CT_SmartTagPr_Attributes: Attributes;
export interface CT_SmartTagType {
    namespaceUri?: string;
    name?: string;
    url?: string;
}
export declare const CT_SmartTagType_Attributes: Attributes;
export interface CT_SmartTagTypes {
    smartTagType?: CT_SmartTagType[];
}
export declare const CT_SmartTagTypes_Attributes: Attributes;
export type ST_TargetScreenSize = '544x376' | '640x480' | '720x512' | '800x600' | '1024x768' | '1152x882' | '1152x900' | '1280x1024' | '1600x1200' | '1800x1440' | '1920x1200';
export interface CT_WebPublishing {
    css?: boolean;
    thicket?: boolean;
    longFileNames?: boolean;
    vml?: boolean;
    allowPng?: boolean;
    targetScreenSize?: ST_TargetScreenSize;
    dpi?: number;
    characterSet?: string;
}
export declare const CT_WebPublishing_Attributes: Attributes;
export interface CT_FileRecoveryPr {
    autoRecover?: boolean;
    crashSave?: boolean;
    dataExtractLoad?: boolean;
    repairLoad?: boolean;
}
export declare const CT_FileRecoveryPr_Attributes: Attributes;
export interface CT_WebPublishObject {
    id?: number;
    divId?: string;
    sourceObject?: string;
    destinationFile?: string;
    title?: string;
    autoRepublish?: boolean;
}
export declare const CT_WebPublishObject_Attributes: Attributes;
export interface CT_WebPublishObjects {
    webPublishObject?: CT_WebPublishObject[];
    count?: number;
}
export declare const CT_WebPublishObjects_Attributes: Attributes;
export interface CT_Workbook {
    fileVersion?: CT_FileVersion;
    fileSharing?: CT_FileSharing;
    workbookPr?: CT_WorkbookPr;
    workbookProtection?: CT_WorkbookProtection;
    bookViews?: CT_BookViews;
    sheets?: CT_Sheets;
    functionGroups?: CT_FunctionGroups;
    externalReferences?: CT_ExternalReferences;
    definedNames?: CT_DefinedNames;
    calcPr?: CT_CalcPr;
    oleSize?: CT_OleSize;
    customWorkbookViews?: CT_CustomWorkbookViews;
    pivotCaches?: CT_PivotCaches;
    smartTagPr?: CT_SmartTagPr;
    smartTagTypes?: CT_SmartTagTypes;
    webPublishing?: CT_WebPublishing;
    fileRecoveryPr?: CT_FileRecoveryPr[];
    webPublishObjects?: CT_WebPublishObjects;
    extLst?: CT_ExtensionList;
    conformance?: ST_ConformanceClass;
}
export declare const CT_Workbook_Attributes: Attributes;
