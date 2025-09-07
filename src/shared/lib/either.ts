

export type Left<E> = {
    type: 'error',
    error: E
}

export type Right<V> = {
    type: 'success',
    value: V
}

export type Either<V, E> = Left<E> | Right<V>

export const left = <E>(error: E): Left<E> => ({
    type: 'error',
    error
})
export const right = <V>(value: V): Right<V> => ({
    type: 'success',
    value
})

export const mapEither = <V, V2, E = unknown>(
    either: Either<V, E>,
    fn: (value: V) => V2,
): Either<V2, E> => {
    if (either.type === 'success') {
        return { type: 'success', value: fn(either.value) }
    }
    return either
}