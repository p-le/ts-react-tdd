export function bind<T>(fns: string[], context: T) {
    fns.map((fn) => (context as any)[fn] = (context as any)[fn].bind(context));
}
