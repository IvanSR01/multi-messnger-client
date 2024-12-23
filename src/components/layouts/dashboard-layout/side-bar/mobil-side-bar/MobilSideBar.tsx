"use client";
import { ReactIcon } from "@/components/react-icon/ReactIcon";
import { useModal } from "@/hooks/useModal";
import { useSearchQuery } from "@/hooks/useSearchQuery";
import Input from "@/shared/ui/input/Input";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren } from "react";
import styles from "./MobilSideBar.module.scss";
import { SelectContactUser } from "./select-contact-user/SelectContactUser";
import { useAppDispatch, useAppSelector } from "@/hooks/useAction";
import { setIsEditMode, setIsSearchMode } from "@/store/slice/modal.slice";
import UserAvatar from "@/components/user-avatar/UserAvatar";
import { usePathname } from "next/navigation";
import Link from "next/link";
export function MobilSideBar({ children }: PropsWithChildren) {
  const { handleChangeSearchTerm: handleFolderTerm, searchTerm: folderTerm } =
    useSearchQuery({
      queryParam: "folder",
    });
  const { isModalOpen, openModal, closeModal, modalElementRef } = useModal();
  const { isEditMode, isSearchMode } = useAppSelector((state) => state.modal);

  const pathname = usePathname();
  const dispatch = useAppDispatch();
  return (
    <div
      className={styles.mobilSideBar}
      style={{
        padding: isSearchMode ? "1120px 0px 80px 0px !important" : "0 0 80px 0",
      }}
    >
      {pathname === "/dashboard/main" && (
        <div className={styles.header}>
          <AnimatePresence>
            {!isSearchMode && (
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: 0 }}
                exit={{ y: -100 }}
                transition={{
                  duration: 0.1,
                }}
                className={styles.top}
              >
                <div
                  className={styles.edit}
                  onClick={() => dispatch(setIsEditMode(!isEditMode))}
                >
                  {isEditMode ? "Done" : "Edit"}
                </div>
                <div onClick={() => openModal()}>
                  <ReactIcon name="FaEdit" className={styles.newChat} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div className={styles.inputWrapper}>
            <Input
              style={{
                borderRadius: "10px",
              }}
              className={styles.searchInput}
              icon={<ReactIcon name="FaSearch" />}
              placeholder="Search"
              onFocus={() => dispatch(setIsSearchMode(true))}
            />
            {isSearchMode && (
              <div
                onClick={() => dispatch(setIsSearchMode(false))}
                className={styles.cancel}
              >
                Close
              </div>
            )}
          </motion.div>
          <div className={styles.folders}>
            <div
              className={clsx(styles.folder, {
                [styles.active]: !folderTerm,
                [styles.editMode]: isEditMode,
              })}
              onClick={() => (isEditMode ? {} : handleFolderTerm(""))}
            >
              All
            </div>
            <div
              className={clsx(styles.folder, {
                [styles.active]: folderTerm === "Work",
                [styles.editMode]: isEditMode,
              })}
              onClick={() => (isEditMode ? {} : handleFolderTerm("Work"))}
            >
              {isEditMode && (
                <div className={styles.remove}>
                  <ReactIcon name="AiOutlineClose" />
                </div>
              )}
              <p>Work</p>
            </div>
          </div>
        </div>
      )}
      {children}
      <div className={styles.footer}>
        <div className={styles.footerItem}>
          <ReactIcon name="IoMdContact" className={styles.footerIcon} />
          <p className={styles.footerText}>Contact</p>
        </div>
        <Link href="/dashboard/main">
          <div
            className={clsx(styles.footerItem, {
              [styles.active]: pathname === "/dashboard/main",
            })}
          >
            <ReactIcon name="FaComments" className={styles.footerIcon} />
            <p className={styles.footerText}>Chats</p>
          </div>
        </Link>
        <Link href="/dashboard/setting">
          <div
            className={clsx(styles.footerItem, {
              [styles.active]: pathname === "/dashboard/setting",
            })}
          >
            <UserAvatar
              src="/5d8b4098d7f6a6f4e4d74f121528f0d2.jpg"
              alt="User"
              size="mini"
            />
            <p className={styles.footerText}>Setting</p>
          </div>
        </Link>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <SelectContactUser close={() => closeModal()} ref={modalElementRef} />
        )}
      </AnimatePresence>
    </div>
  );
}
