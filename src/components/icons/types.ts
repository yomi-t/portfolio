import type { SVGProps } from "react";

/**
 * ブランドロゴアイコン共通のprops。
 * 幅高さは正方形前提なので size に一本化し、色は currentColor に委ねる。
 */
export type BrandIconProps = Omit<SVGProps<SVGSVGElement>, "width" | "height"> & {
    size?: number;
};
