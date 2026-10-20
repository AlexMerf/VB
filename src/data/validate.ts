import infoJson from './info.json'
import project1Json from './project_1.json'
import project2Json from './project_2.json'

import { siteInfoSchema } from './schemas'

/**
 * Проверка контента на этапе сборки. Вызывается из корневого layout (сервер),
 * поэтому не попадает в клиентский бандл, но ломает билд при ошибке в данных.
 */
export const validateContent = () => {
	siteInfoSchema.parse(infoJson)

	if (project1Json.tegs.length === 0 || project2Json.tegs.length === 0) {
		throw new Error('project_*.json: у кейса должен быть хотя бы один тег')
	}
}
