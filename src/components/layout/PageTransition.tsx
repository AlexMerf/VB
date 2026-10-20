import type { ReactNode } from 'react'

import styles from './styles.module.scss'

// CSS-анимация вместо motion: контент виден с первого кадра и не ждёт гидрации.
export const PageTransition = ({ children }: { children: ReactNode }) => {
	return <div className={styles.page}>{children}</div>
}
