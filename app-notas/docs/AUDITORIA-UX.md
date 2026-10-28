# Auditoría y Rediseño de UX/UI - App Notas

## 1. Evaluación por Heurísticas de Nielsen
| Heurística | Problema de la Interfaz Original | Solución Aplicada en el Rediseño |
| :--- | :--- | :--- |
| **Visibilidad del estado del sistema** | No daba ningún aviso al guardar o eliminar una nota. | Se integró una barra de feedback/notificación que confirma acciones (ej. "Nota agregada"). |
| **Control y libertad del usuario** | Si eliminabas una nota, se borraba de inmediato sin opción a recuperarla. | Se agregó un botón de "Deshacer" para restaurar la nota eliminada y un botón de cancelación. |
| **Prevención de errores** | Permitía agregar notas vacías haciendo clic en el botón. | Se desactiva el botón y se valida en JS para impedir crear notas sin contenido. |
| **Reconocer antes que recordar** | Los campos no tenían `<label>` descriptivo ni guías claras. | Se añadieron etiquetas `<label>` visibles y textos contextuales en los inputs. |
| **Estética y diseño minimalista** | Desorden en la tipografía, falta de contraste y botones diminutos. | Se aplicaron variables CSS, paleta accesible con contraste > 4.5:1 y espacio consistente. |

## 2. Aplicación de Leyes de UX
* **Ley de Fitts:** Se aumentó la altura de los botones a un mínimo de **44px** y se agrandaron las áreas de clic para facilitar su interacción con el ratón o táctil.
* **Ley de Hick:** Se simplificó la interfaz reduciendo las opciones simultáneas a un flujo directo de creación y eliminación rápida, evitando saturación de decisiones.
* **Ley de Miller:** Se estructuraron las notas en tarjetas independientes delimitadas por bordes claros para facilitar que el usuario las procese en bloques pequeños.