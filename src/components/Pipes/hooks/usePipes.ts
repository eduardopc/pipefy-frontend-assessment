import { useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_PIPES_BY_ORGANIZATION } from "../graphql";
import {
  GetPipesByOrganization,
  GetPipesByOrganizationVariables,
  GetPipesByOrganization_organization_pipes,
} from "../__generated__/GetPipesByOrganization";

export interface IQueryPipes {
  organizationId: string;
}

const usePipes = ({ organizationId }: IQueryPipes) => {
  const [pipes, setPipes] = useState<
    (GetPipesByOrganization_organization_pipes | null)[] | null
  >();

  const { error, loading } = useQuery<
    GetPipesByOrganization,
    GetPipesByOrganizationVariables
  >(GET_PIPES_BY_ORGANIZATION, {
    variables: {
      id: organizationId,
    },
    fetchPolicy: "network-only",
    onCompleted: (data) => {
      const sortedPipes =
        data.organization?.pipes &&
        data.organization!.pipes!.sort((pipeA, pipeB) =>
          pipeA!.name.trim().localeCompare(pipeB!.name.trim())
        );

      setPipes(sortedPipes);
    },
  });

  return {
    error,
    data: pipes,
    loading,
  };
};

export default usePipes;
