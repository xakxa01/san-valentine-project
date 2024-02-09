import { twMerge } from 'tailwind-merge'
import { clsx } from "clsx"

export const twc = (...input) => twMerge(clsx(...input))