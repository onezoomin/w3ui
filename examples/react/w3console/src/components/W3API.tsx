import { useMemo } from 'react'
import {
  useUploader,
  UploaderContextValue,
  UploaderProvider
} from '@w3ui/react-uploader'
import {
  useUploadsList,
  UploadsListContextValue,
  UploadsListProvider
} from '@w3ui/react-uploads-list'
import {
  useKeyring,
  KeyringContextValue,
  KeyringProvider
} from '@w3ui/react-keyring'
import { accessServiceConnection, accessServicePrincipal, uploadServiceConnection, uploadServicePrincipal } from './services'

export interface W3APIContextValue {
  keyring: KeyringContextValue
  uploader: UploaderContextValue
  uploadsList: UploadsListContextValue
}

export interface W3APIProviderProps {
  children: JSX.Element | JSX.Element[]
  uploadsListPageSize?: number
}

export function W3APIProvider ({
  children,
  uploadsListPageSize
}: W3APIProviderProps): JSX.Element {
  return (
    <KeyringProvider servicePrincipal={accessServicePrincipal} connection={accessServiceConnection}>
      <UploaderProvider servicePrincipal={uploadServicePrincipal} connection={uploadServiceConnection}>
        <UploadsListProvider servicePrincipal={uploadServicePrincipal} connection={uploadServiceConnection} size={uploadsListPageSize}>
          <>{children}</>
        </UploadsListProvider>
      </UploaderProvider>
    </KeyringProvider>
  )
}

export function useW3API (): W3APIContextValue {
  const keyring = useKeyring()
  const uploader = useUploader()
  const uploadsList = useUploadsList()
  const value = useMemo<W3APIContextValue>(
    () => ({
      keyring,
      uploader,
      uploadsList
    }),
    [keyring, uploader, uploadsList]
  )
  return value
}
