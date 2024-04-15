/**
 * 将 arc 定义转成 SVG PATH 里的 A 命令
 */
/**
 * 将 arc 转成 A 指令，但目前看来不太正确，比如 curvedRightArrow 的显示就不对
 */
export default function arcToPathA(wR: number, hR: number, stAng: number, swAng: number, preX: number, preY: number): {
    path: string;
    end: {
        x: number;
        y: number;
    };
};
