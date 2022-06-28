import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

const menuGeral = [
  {
    icon: RiDashboardLine,
    text: "Dashboard",
  },
  {
    icon: RiContactsLine,
    text: "Usuários",
  },
];
const menuAutomacao = [
  {
    icon: RiInputMethodLine,
    text: "Formulários",
  },
  {
    icon: RiGitMergeLine,
    text: "Automação",
  },
];

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            GERAL
          </Text>
          {menuGeral.map(({ icon, text }) => {
            return (
              <Stack key={text} spacing="4" mt="8" align="stretch">
                <Link display="flex" align="center">
                  <Icon as={icon} fontSize="20" />
                  <Text ml="4" fontWeight="medium">
                    {text}
                  </Text>
                </Link>
              </Stack>
            );
          })}
        </Box>
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            AUTOMAÇÃO
          </Text>
          {menuAutomacao.map(({ icon, text }) => {
            return (
              <Stack key={text} spacing="4" mt="8" align="stretch">
                <Link display="flex" align="center">
                  <Icon as={icon} fontSize="20" />
                  <Text ml="4" fontWeight="medium">
                    {text}
                  </Text>
                </Link>
              </Stack>
            );
          })}
        </Box>
      </Stack>
    </Box>
  );
}
