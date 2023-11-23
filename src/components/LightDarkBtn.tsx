import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { IconSun, IconMoon } from '@tabler/icons-react'
import styles from '../app/page.module.css'

const LightDarkBtn = () => {
  const { setColorScheme, colorScheme } = useMantineColorScheme()
  // const computedColorScheme = useComputedColorScheme('light', {
  //   getInitialValueInEffect: true,
  // })
  const isDarkMode = colorScheme === 'dark'
  return (
    <div>
      <ActionIcon
        className={styles.icon}
        onClick={() =>
          setColorScheme(colorScheme === 'light' ? 'dark' : 'light')
        }
        variant="default"
        size="xl"
        aria-label="Toggle color scheme"
      >
        {isDarkMode ? (
          <IconSun
            style={{
              width: 24,
              height: 24,
            }}
            stroke={1.5}
          />
        ) : (
          <IconMoon
            style={{
              width: 18,
              height: 18,
            }}
            stroke={1.5}
          />
        )}
      </ActionIcon>
    </div>
  )
}
export default LightDarkBtn
